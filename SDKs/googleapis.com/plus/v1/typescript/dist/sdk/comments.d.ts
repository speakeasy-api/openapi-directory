import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Comments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Shut down. See https://developers.google.com/+/api-shutdown for more details.
     */
    plusCommentsGet(req: operations.PlusCommentsGetRequest, security: operations.PlusCommentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.PlusCommentsGetResponse>;
    /**
     * Shut down. See https://developers.google.com/+/api-shutdown for more details.
     */
    plusCommentsList(req: operations.PlusCommentsListRequest, security: operations.PlusCommentsListSecurity, config?: AxiosRequestConfig): Promise<operations.PlusCommentsListResponse>;
}
