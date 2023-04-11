import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccidentStats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets all accident details for accidents occuring in the specified year
     */
    accidentStatsGet(req: operations.AccidentStatsGetRequest, config?: AxiosRequestConfig): Promise<operations.AccidentStatsGetResponse>;
}
