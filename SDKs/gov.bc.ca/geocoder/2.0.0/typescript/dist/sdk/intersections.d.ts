import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Intersections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Geocode an address
     *
     * @remarks
     * Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.
     */
    getAddressesOutputFormat(req: operations.GetAddressesOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressesOutputFormatResponse>;
    /**
     * Find intersections near to a geographic point
     *
     * @remarks
     * Represents intersections near a given point
     */
    getIntersectionsNearOutputFormat(req: operations.GetIntersectionsNearOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetIntersectionsNearOutputFormatResponse>;
    /**
     * Find nearest intersection to a geographic point
     *
     * @remarks
     * Represents the closest intersection to a given point
     */
    getIntersectionsNearestOutputFormat(req: operations.GetIntersectionsNearestOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetIntersectionsNearestOutputFormatResponse>;
    /**
     * Find intersections in a geographic area
     *
     * @remarks
     * Represents all intersections within a given area
     */
    getIntersectionsWithinOutputFormat(req: operations.GetIntersectionsWithinOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetIntersectionsWithinOutputFormatResponse>;
    /**
     * Get an intersection by its unique ID
     *
     * @remarks
     * Represents a individual intersection
     */
    getIntersectionsIntersectionIDOutputFormat(req: operations.GetIntersectionsIntersectionIDOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetIntersectionsIntersectionIDOutputFormatResponse>;
}
