import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Previews {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get preview image of uploaded file
     *
     * @remarks
     * This GET-Method returns the URL where the preview image of uploaded file can downloaded from.
     */
    previewsRead(req: operations.PreviewsReadRequest, config?: AxiosRequestConfig): Promise<operations.PreviewsReadResponse>;
}
