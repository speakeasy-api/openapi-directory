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
    speechOperationsGet(req: operations.SpeechOperationsGetRequest, security: operations.SpeechOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.SpeechOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    speechOperationsList(req: operations.SpeechOperationsListRequest, security: operations.SpeechOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.SpeechOperationsListResponse>;
}
