import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Every target has a site object, it contains the main entry URL for scans.
 *
 * @remarks
 * Other settings are also connected to a site like login parameters,
 * basic auth, and custom headers and cookies.
 *
 */
export declare class Site {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve target's site
     */
    getTargetsTargetIdSite(req: operations.GetTargetsTargetIdSiteRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdSiteResponse>;
    /**
     * Partial update target's site
     *
     * @remarks
     * Note that the URL can only be set once.
     */
    patchTargetsTargetIdSite(req: operations.PatchTargetsTargetIdSiteRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdSiteResponse>;
    /**
     * Verify site ownership
     */
    postTargetsTargetIdSiteVerify(req: operations.PostTargetsTargetIdSiteVerifyRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdSiteVerifyResponse>;
    /**
     * Update target's site
     *
     * @remarks
     * Note that the URL can only be set once.
     */
    putTargetsTargetIdSite(req: operations.PutTargetsTargetIdSiteRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdSiteResponse>;
}
