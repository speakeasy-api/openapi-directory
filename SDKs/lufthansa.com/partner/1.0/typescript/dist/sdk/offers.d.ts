import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Offers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * All Fares
     *
     * @remarks
     * Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS
     */
    allFares(req: operations.AllFaresRequest, security: operations.AllFaresSecurity, config?: AxiosRequestConfig): Promise<operations.AllFaresResponse>;
    /**
     * Best Fares
     *
     * @remarks
     * Retrieve best fares for the requested journey across multiple days or multiple months.
     */
    bestFares(req: operations.BestFaresRequest, security: operations.BestFaresSecurity, config?: AxiosRequestConfig): Promise<operations.BestFaresResponse>;
    /**
     * Deep Links
     *
     * @remarks
     * Returns valid deep links for the provided input parameters
     */
    deepLinks(req: operations.DeepLinksRequest, security: operations.DeepLinksSecurity, config?: AxiosRequestConfig): Promise<operations.DeepLinksResponse>;
    /**
     * Fares
     *
     * @remarks
     * Retrieve all available fares per fare family for a specific Origin & Destination on a given date
     */
    fares(req: operations.FaresRequest, security: operations.FaresSecurity, config?: AxiosRequestConfig): Promise<operations.FaresResponse>;
    /**
     * Fares Subscriptions
     *
     * @remarks
     * Create a subscription for best price O&D. Receive regular updates on lowest fares
     */
    faresSubscriptions(req: operations.FaresSubscriptionsRequest, security: operations.FaresSubscriptionsSecurity, config?: AxiosRequestConfig): Promise<operations.FaresSubscriptionsResponse>;
    /**
     * LH Deep Links - FFP
     *
     * @remarks
     * Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)
     */
    lhDeepLinksFFP(req: operations.LHDeepLinksFFPRequest, security: operations.LHDeepLinksFFPSecurity, config?: AxiosRequestConfig): Promise<operations.LHDeepLinksFFPResponse>;
    /**
     * LH Deep Links - ITCO
     *
     * @remarks
     * Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)
     */
    lhDeepLinksITCO(req: operations.LHDeepLinksITCORequest, security: operations.LHDeepLinksITCOSecurity, config?: AxiosRequestConfig): Promise<operations.LHDeepLinksITCOResponse>;
    /**
     * Lowest Fares
     *
     * @remarks
     * Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH
     */
    lowestFares(req: operations.LowestFaresRequest, security: operations.LowestFaresSecurity, config?: AxiosRequestConfig): Promise<operations.LowestFaresResponse>;
    /**
     * OND Route
     *
     * @remarks
     * Returns LH route origin & destination information
     */
    ondRoute(req: operations.ONDRouteRequest, security: operations.ONDRouteSecurity, config?: AxiosRequestConfig): Promise<operations.ONDRouteResponse>;
    /**
     * OND Status
     *
     * @remarks
     * Returns LH network route status information. Search for recently added or retired routes
     */
    ondStatus(req: operations.ONDStatusRequest, security: operations.ONDStatusSecurity, config?: AxiosRequestConfig): Promise<operations.ONDStatusResponse>;
    /**
     * Top OND
     *
     * @remarks
     * Returns LH Top routes per country or across all countries
     */
    topOND(req: operations.TopONDRequest, security: operations.TopONDSecurity, config?: AxiosRequestConfig): Promise<operations.TopONDResponse>;
}
