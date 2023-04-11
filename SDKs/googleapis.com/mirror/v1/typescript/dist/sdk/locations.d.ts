import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a single location by ID.
     */
    mirrorLocationsGet(req: operations.MirrorLocationsGetRequest, security: operations.MirrorLocationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorLocationsGetResponse>;
    /**
     * Retrieves a list of locations for the user.
     */
    mirrorLocationsList(req: operations.MirrorLocationsListRequest, security: operations.MirrorLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorLocationsListResponse>;
}
