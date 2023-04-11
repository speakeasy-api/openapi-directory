import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Program information including searching for existing programs or fetching a specific program. A program is a collection of episodes that are delivered by ContentDepot as a live stream or pre-recorded files.
 */
export declare class Programs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Optimized free-text search for programs using various filters.
     */
    getApiV2ProgramsSearch(req: operations.GetApiV2ProgramsSearchRequest, security: operations.GetApiV2ProgramsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2ProgramsSearchResponse>;
    /**
     * Returns the program matching the given ID.
     */
    getApiV2ProgramsId(req: operations.GetApiV2ProgramsIdRequest, security: operations.GetApiV2ProgramsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2ProgramsIdResponse>;
}
