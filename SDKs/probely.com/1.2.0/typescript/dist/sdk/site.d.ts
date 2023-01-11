import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Site {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTargetsTargetIdSite - Retrieve target's site
    **/
    getTargetsTargetIdSite(req: operations.GetTargetsTargetIdSiteRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdSiteResponse>;
    /**
     * patchTargetsTargetIdSite - Partial update target's site
     *
     * Note that the URL can only be set once.
    **/
    patchTargetsTargetIdSite(req: operations.PatchTargetsTargetIdSiteRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdSiteResponse>;
    /**
     * postTargetsTargetIdSiteVerify - Verify site ownership
    **/
    postTargetsTargetIdSiteVerify(req: operations.PostTargetsTargetIdSiteVerifyRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdSiteVerifyResponse>;
    /**
     * putTargetsTargetIdSite - Update target's site
     *
     * Note that the URL can only be set once.
    **/
    putTargetsTargetIdSite(req: operations.PutTargetsTargetIdSiteRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdSiteResponse>;
}
