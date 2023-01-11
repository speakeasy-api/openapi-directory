import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ImprovementProgram {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postImprove - Submit an image to the remove.bg Improvement program
     * * Contribute an image that remove.bg is currently not able to remove the background from properly
     * * Help us make remove.bg better
     * * Get better results for similiar images in the future
     *
     * Notes:
     *   * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
     *   * File size: up to 12MB
     *   * up to 100 files per day (up to 1000 for Enterprise customers). <br> Higher Rate Limits are available <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.
     *
     * Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.
     *
     * Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.
     *
    **/
    postImprove(req: operations.PostImproveRequest, config?: AxiosRequestConfig): Promise<operations.PostImproveResponse>;
}
