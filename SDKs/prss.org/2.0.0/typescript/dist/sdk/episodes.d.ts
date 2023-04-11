import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * An episode is a specific instance of a program that will air on a specific date and time.
 */
export declare class Episodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets episodes matching the given criteria.
     */
    getApiV2Episodes(req: operations.GetApiV2EpisodesRequest, security: operations.GetApiV2EpisodesSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2EpisodesResponse>;
    /**
     * Returns the episode matching the given ID.
     */
    getApiV2EpisodesId(req: operations.GetApiV2EpisodesIdRequest, security: operations.GetApiV2EpisodesIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2EpisodesIdResponse>;
}
