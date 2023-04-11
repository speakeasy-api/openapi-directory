import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Edit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Render Status
     *
     * @remarks
     * Get the rendering status, temporary asset url and details of a render by ID.
     *
     * **base URL:** https://api.shotstack.io/{version}
     */
    getRender(req: operations.GetRenderRequest, security: operations.GetRenderSecurity, config?: AxiosRequestConfig): Promise<operations.GetRenderResponse>;
    /**
     * Render Asset
     *
     * @remarks
     * Queue and render the contents of a timeline as a video, image or audio file.
     */
    postRender(req: shared.Edit, security: operations.PostRenderSecurity, config?: AxiosRequestConfig): Promise<operations.PostRenderResponse>;
}
