import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Platform {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Platform Detail
     *
     * @remarks
     * Return the content of the selected platform.
     */
    getPlatform(req: operations.GetPlatformRequest, security: operations.GetPlatformSecurity, config?: AxiosRequestConfig): Promise<operations.GetPlatformResponse>;
    /**
     * Platform Region Collection
     *
     * @remarks
     * Return a list of regions for a platform.
     */
    listPlatformRegions(req: operations.ListPlatformRegionsRequest, security: operations.ListPlatformRegionsSecurity, config?: AxiosRequestConfig): Promise<operations.ListPlatformRegionsResponse>;
    /**
     * Platform Collection
     *
     * @remarks
     * Return a list of available platforms.
     */
    listPlatforms(req: operations.ListPlatformsRequest, security: operations.ListPlatformsSecurity, config?: AxiosRequestConfig): Promise<operations.ListPlatformsResponse>;
}
