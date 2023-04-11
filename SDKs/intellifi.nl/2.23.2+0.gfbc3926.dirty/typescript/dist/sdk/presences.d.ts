import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `presences` resource is an abstraction for the detection of an item (from the `items` resource) at a location (from the `locations` resource).
 *
 * @remarks
 * Presences are always kept current by the Brain, i.e. if the hold time of a presence expires it is simply removed from the resource.
 *
 *
 * @see {@link https://intellifi.zendesk.com/hc/en-us/articles/360008309313}
 */
export declare class Presences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get presence
     */
    getPresenceById(req: operations.GetPresenceByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPresenceByIdResponse>;
    /**
     * Get all presences
     */
    getPresences(req: operations.GetPresencesRequest, config?: AxiosRequestConfig): Promise<operations.GetPresencesResponse>;
}
