import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Platforms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of video game platforms.
     */
    platformsList(req: operations.PlatformsListRequest, config?: AxiosRequestConfig): Promise<operations.PlatformsListResponse>;
    /**
     * Get a list of parent platforms.
     *
     * @remarks
     * For instance, for PS2 and PS4 the “parent platform” is PlayStation.
     */
    platformsListsParentsList(req: operations.PlatformsListsParentsListRequest, config?: AxiosRequestConfig): Promise<operations.PlatformsListsParentsListResponse>;
    /**
     * Get details of the platform.
     */
    platformsRead(req: operations.PlatformsReadRequest, config?: AxiosRequestConfig): Promise<operations.PlatformsReadResponse>;
}
