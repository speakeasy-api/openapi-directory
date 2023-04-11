import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ValuesInPast {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets all (last) values of a device
     *             The first Value found before the given Date is returned.
     *
     * @remarks
     * Gets the Values for a device at a given Date. The first Value found before the given Date is returned.
     */
    valuesInPastGet(req: operations.ValuesInPastGetRequest, config?: AxiosRequestConfig): Promise<operations.ValuesInPastGetResponse>;
}
