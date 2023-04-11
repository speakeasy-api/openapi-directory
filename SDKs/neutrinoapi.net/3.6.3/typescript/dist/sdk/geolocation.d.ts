import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Geolocation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Geocode Address
     *
     * @remarks
     * Geocode an address, partial address or just the name of a place
     */
    geocodeAddress(req: operations.GeocodeAddressRequest, config?: AxiosRequestConfig): Promise<operations.GeocodeAddressResponse>;
    /**
     * Geocode Reverse
     *
     * @remarks
     * Convert a geographic coordinate (latitude and longitude) into a real world address
     */
    geocodeReverse(req: operations.GeocodeReverseRequest, config?: AxiosRequestConfig): Promise<operations.GeocodeReverseResponse>;
    /**
     * IP Info
     *
     * @remarks
     * Get location information about an IP address and do reverse DNS (PTR) lookups
     */
    ipInfo(req: operations.IPInfoRequest, config?: AxiosRequestConfig): Promise<operations.IPInfoResponse>;
}
