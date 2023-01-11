import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Geolocation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * geocodeAddress - Geocode Address
     *
     * Geocode an address, partial address or just the name of a place
    **/
    geocodeAddress(req: operations.GeocodeAddressRequest, config?: AxiosRequestConfig): Promise<operations.GeocodeAddressResponse>;
    /**
     * geocodeReverse - Geocode Reverse
     *
     * Convert a geographic coordinate (latitude and longitude) into a real world address
    **/
    geocodeReverse(req: operations.GeocodeReverseRequest, config?: AxiosRequestConfig): Promise<operations.GeocodeReverseResponse>;
    /**
     * ipInfo - IP Info
     *
     * Get location information about an IP address and do reverse DNS (PTR) lookups
    **/
    ipInfo(req: operations.IpInfoRequest, config?: AxiosRequestConfig): Promise<operations.IpInfoResponse>;
}
