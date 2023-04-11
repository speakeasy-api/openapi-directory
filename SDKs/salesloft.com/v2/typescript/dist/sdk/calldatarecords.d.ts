import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Call Data Record Management
 */
export declare class CallDataRecords {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List call data records
     *
     * @remarks
     * Fetches multiple call data records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     * Call data records are records of all inbound and outbound calls through Salesloft. A call data record may
     * be associated with a call, but does not have to be.
     *
     */
    getV2CallDataRecordsJson(req: operations.GetV2CallDataRecordsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CallDataRecordsJsonResponse>;
    /**
     * Fetch a call data record
     *
     * @remarks
     * Fetches a call data record, by ID only.
     *
     */
    getV2CallDataRecordsIdJson(req: operations.GetV2CallDataRecordsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CallDataRecordsIdJsonResponse>;
}
