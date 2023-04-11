import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Tools to assist with sending and receiving messages, such as file sharing, translation, etc.
 */
export declare class Tools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS
     */
    toolsShareFileMultipart(req: operations.ToolsShareFileMultipartFormData, security: operations.ToolsShareFileMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.ToolsShareFileMultipartResponse>;
    /**
     * Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS
     */
    toolsShareFileRaw(req: Uint8Array, security: operations.ToolsShareFileRawSecurity, config?: AxiosRequestConfig): Promise<operations.ToolsShareFileRawResponse>;
}
