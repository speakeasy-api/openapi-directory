import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Geocoding {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Geocode
     */
    getSearchVersionNumberGeocodeQueryExt(req: operations.GetSearchVersionNumberGeocodeQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberGeocodeQueryExtResponse>;
    /**
     * Structured Geocode
     */
    getSearchVersionNumberStructuredGeocodeExt(req: operations.GetSearchVersionNumberStructuredGeocodeExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberStructuredGeocodeExtResponse>;
}
