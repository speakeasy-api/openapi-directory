import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ReverseGeocoding {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cross Street lookup
     */
    getSearchVersionNumberReverseGeocodeCrossStreetPositionExt(req: operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse>;
    /**
     * Reverse Geocode
     */
    getSearchVersionNumberReverseGeocodePositionExt(req: operations.GetSearchVersionNumberReverseGeocodePositionExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberReverseGeocodePositionExtResponse>;
}
