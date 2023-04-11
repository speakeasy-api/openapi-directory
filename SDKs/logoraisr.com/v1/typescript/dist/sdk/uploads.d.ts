import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Uploads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Upload a new image
     *
     * @remarks
     * This POST-Method uploads a new file on the server.
     */
    uploadsCreate(req: operations.UploadsCreateRequestBody, config?: AxiosRequestConfig): Promise<operations.UploadsCreateResponse>;
}
