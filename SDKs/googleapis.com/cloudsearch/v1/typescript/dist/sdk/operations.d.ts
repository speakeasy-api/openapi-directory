import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Operations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    cloudsearchOperationsGet(req: operations.CloudsearchOperationsGetRequest, security: operations.CloudsearchOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    cloudsearchOperationsLroList(req: operations.CloudsearchOperationsLroListRequest, security: operations.CloudsearchOperationsLroListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchOperationsLroListResponse>;
}
