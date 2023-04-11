import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Call Dispositions
 */
export declare class CallDispositions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List call dispositions
     *
     * @remarks
     * Fetches multiple call disposition records. The records can be sorted according to
     * the respective parameters. Call dispositions must be configured in application. This will
     * change in the future, but please contact us if you have a pressing use case.
     *
     */
    getV2CallDispositionsJson(req: operations.GetV2CallDispositionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CallDispositionsJsonResponse>;
}
