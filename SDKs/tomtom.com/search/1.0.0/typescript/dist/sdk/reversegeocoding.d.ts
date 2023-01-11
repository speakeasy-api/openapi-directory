import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ReverseGeocoding {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSearchVersionNumberReverseGeocodeCrossStreetPositionExt - Cross Street lookup
    **/
    getSearchVersionNumberReverseGeocodeCrossStreetPositionExt(req: operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse>;
    /**
     * getSearchVersionNumberReverseGeocodePositionExt - Reverse Geocode
    **/
    getSearchVersionNumberReverseGeocodePositionExt(req: operations.GetSearchVersionNumberReverseGeocodePositionExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberReverseGeocodePositionExtResponse>;
}
