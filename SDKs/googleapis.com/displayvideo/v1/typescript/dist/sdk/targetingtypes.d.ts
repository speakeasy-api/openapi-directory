import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TargetingTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a single targeting option.
     */
    displayvideoTargetingTypesTargetingOptionsGet(req: operations.DisplayvideoTargetingTypesTargetingOptionsGetRequest, security: operations.DisplayvideoTargetingTypesTargetingOptionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoTargetingTypesTargetingOptionsGetResponse>;
    /**
     * Lists targeting options of a given type.
     */
    displayvideoTargetingTypesTargetingOptionsList(req: operations.DisplayvideoTargetingTypesTargetingOptionsListRequest, security: operations.DisplayvideoTargetingTypesTargetingOptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoTargetingTypesTargetingOptionsListResponse>;
    /**
     * Searches for targeting options of a given type based on the given search terms.
     */
    displayvideoTargetingTypesTargetingOptionsSearch(req: operations.DisplayvideoTargetingTypesTargetingOptionsSearchRequest, security: operations.DisplayvideoTargetingTypesTargetingOptionsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoTargetingTypesTargetingOptionsSearchResponse>;
}
