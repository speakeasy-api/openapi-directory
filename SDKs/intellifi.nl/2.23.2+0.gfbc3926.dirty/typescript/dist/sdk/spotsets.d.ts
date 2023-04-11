import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `spotsets` resource contains a collection of set definitons for each Smartspot and allows for remote mananagement.
 *
 * @remarks
 * Spotsets are stored and used on the Smartspot locally and synced between Smartspot and server.
 * Spotsets primarly are used as an input for Sense&Control.
 *
 *
 * @see {@link https://intellifi.zendesk.com/hc/en-us/articles/360009282834}
 */
export declare class Spotsets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get spotsets
     */
    getSpotsets(config?: AxiosRequestConfig): Promise<operations.GetSpotsetsResponse>;
    /**
     * Get spotset
     */
    getSpotsetsId(req: operations.GetSpotsetsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotsetsIdResponse>;
    /**
     * Create spotset
     */
    postSpotsets(req: any, config?: AxiosRequestConfig): Promise<operations.PostSpotsetsResponse>;
    /**
     * Update existing spotset
     */
    putSpotsetsId(req: operations.PutSpotsetsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSpotsetsIdResponse>;
}
