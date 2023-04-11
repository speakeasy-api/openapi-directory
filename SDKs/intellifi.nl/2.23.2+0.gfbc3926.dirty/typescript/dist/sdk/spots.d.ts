import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `spots` resource contains representations of Smartspot devices that have connected to this Brain at least once.
 *
 * @remarks
 * It is possible to configure Smartspots through this resource.
 *
 * Smartspots also have their own locally stored sets, referred to as "spotsets".
 * Spotsets can be created and managed within a single spot instance or by using `spotsets` resource.
 * Created or updated spotsets are automatically synced between Smartspot and server.
 *
 *
 * @see {@link https://intellifi.zendesk.com/hc/en-us/categories/360000685434}
 */
export declare class Spots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create spotset
     */
    addSpotSet(req: operations.AddSpotSetRequest, config?: AxiosRequestConfig): Promise<operations.AddSpotSetResponse>;
    /**
     * Get spot
     */
    getSpotById(req: operations.GetSpotByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotByIdResponse>;
    /**
     * Get spotset
     */
    getSpotSetById(req: operations.GetSpotSetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotSetByIdResponse>;
    /**
     * Get spotsets
     */
    getSpotSetsById(req: operations.GetSpotSetsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotSetsByIdResponse>;
    /**
     * Get all spots
     */
    getSpots(req: operations.GetSpotsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotsResponse>;
    /**
     * Update existing spot
     */
    updateSpot(req: operations.UpdateSpotRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSpotResponse>;
    /**
     * Update existing spotset
     */
    updateSpotSet(req: operations.UpdateSpotSetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSpotSetResponse>;
}
