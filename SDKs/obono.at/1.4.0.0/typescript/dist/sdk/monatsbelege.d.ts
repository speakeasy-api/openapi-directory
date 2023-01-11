import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Monatsbelege {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMonatsbelege - Returns a list of `Monatsbelege`.
    **/
    getMonatsbelege(req: operations.GetMonatsbelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetMonatsbelegeResponse>;
}
