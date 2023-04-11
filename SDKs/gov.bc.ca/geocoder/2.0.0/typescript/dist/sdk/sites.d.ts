import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sites {
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
     * Find sites near to a geographic point
     *
     * @remarks
     * Represents sites near a given point in the order of closest to farthest
     */
    getSitesNearOutputFormat(req: operations.GetSitesNearOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesNearOutputFormatResponse>;
    /**
     * Find the site nearest to a geographic point
     *
     * @remarks
     * Represents the site nearest a given point
     */
    getSitesNearestOutputFormat(req: operations.GetSitesNearestOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesNearestOutputFormatResponse>;
    /**
     * Find sites in a geographic area
     *
     * @remarks
     * Represents sites within a given area
     */
    getSitesWithinOutputFormat(req: operations.GetSitesWithinOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesWithinOutputFormatResponse>;
    /**
     * Get a site by its unique ID
     *
     * @remarks
     * Represents an individual site
     */
    getSitesSiteIDOutputFormat(req: operations.GetSitesSiteIDOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesSiteIDOutputFormatResponse>;
    /**
     * Represents all subsites of a given site
     *
     * @remarks
     * Represents all subsites of a given site
     */
    getSitesSiteIDSubsitesOutputFormat(req: operations.GetSitesSiteIDSubsitesOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesSiteIDSubsitesOutputFormatResponse>;
}
