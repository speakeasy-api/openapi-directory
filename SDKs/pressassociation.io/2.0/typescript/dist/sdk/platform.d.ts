import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Platform {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPlatform - Platform Detail
     *
     * Return the content of the selected platform.
    **/
    getPlatform(req: operations.GetPlatformRequest, config?: AxiosRequestConfig): Promise<operations.GetPlatformResponse>;
    /**
     * listPlatformRegions - Platform Region Collection
     *
     * Return a list of regions for a platform.
    **/
    listPlatformRegions(req: operations.ListPlatformRegionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPlatformRegionsResponse>;
    /**
     * listPlatforms - Platform Collection
     *
     * Return a list of available platforms.
    **/
    listPlatforms(req: operations.ListPlatformsRequest, config?: AxiosRequestConfig): Promise<operations.ListPlatformsResponse>;
}
