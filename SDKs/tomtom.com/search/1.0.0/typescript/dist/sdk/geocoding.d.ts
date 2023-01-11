import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Geocoding {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSearchVersionNumberGeocodeQueryExt - Geocode
    **/
    getSearchVersionNumberGeocodeQueryExt(req: operations.GetSearchVersionNumberGeocodeQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberGeocodeQueryExtResponse>;
    /**
     * getSearchVersionNumberStructuredGeocodeExt - Structured Geocode
    **/
    getSearchVersionNumberStructuredGeocodeExt(req: operations.GetSearchVersionNumberStructuredGeocodeExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberStructuredGeocodeExtResponse>;
}
