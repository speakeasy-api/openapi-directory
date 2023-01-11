import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Uploads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * uploadsCreate - Upload a new image
     *
     * This POST-Method uploads a new file on the server.
    **/
    uploadsCreate(req: operations.UploadsCreateRequest, config?: AxiosRequestConfig): Promise<operations.UploadsCreateResponse>;
}
