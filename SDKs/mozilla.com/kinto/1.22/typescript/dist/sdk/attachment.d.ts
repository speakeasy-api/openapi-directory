import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Attachment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    createAttachment(req: operations.CreateAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateAttachmentResponse>;
    deleteAttachment(req: operations.DeleteAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttachmentResponse>;
}
