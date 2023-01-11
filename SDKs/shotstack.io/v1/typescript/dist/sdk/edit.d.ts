import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Edit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRender - Get Render Status
     *
     * Get the rendering status, temporary asset url and details of a render by ID.
     *
     * **base URL:** https://api.shotstack.io/{version}
    **/
    getRender(req: operations.GetRenderRequest, config?: AxiosRequestConfig): Promise<operations.GetRenderResponse>;
    /**
     * postRender - Render Asset
     *
     * Queue and render the contents of a timeline as a video, image or audio file.
    **/
    postRender(req: operations.PostRenderRequest, config?: AxiosRequestConfig): Promise<operations.PostRenderResponse>;
}
