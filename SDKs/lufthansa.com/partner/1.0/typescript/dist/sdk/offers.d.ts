import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Offers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * allFares - All Fares
     *
     * Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS
    **/
    allFares(req: operations.AllFaresRequest, config?: AxiosRequestConfig): Promise<operations.AllFaresResponse>;
    /**
     * bestFares - Best Fares
     *
     * Retrieve best fares for the requested journey across multiple days or multiple months.
    **/
    bestFares(req: operations.BestFaresRequest, config?: AxiosRequestConfig): Promise<operations.BestFaresResponse>;
    /**
     * deepLinks - Deep Links
     *
     * Returns valid deep links for the provided input parameters
    **/
    deepLinks(req: operations.DeepLinksRequest, config?: AxiosRequestConfig): Promise<operations.DeepLinksResponse>;
    /**
     * fares - Fares
     *
     * Retrieve all available fares per fare family for a specific Origin & Destination on a given date
    **/
    fares(req: operations.FaresRequest, config?: AxiosRequestConfig): Promise<operations.FaresResponse>;
    /**
     * faresSubscriptions - Fares Subscriptions
     *
     * Create a subscription for best price O&D. Receive regular updates on lowest fares
    **/
    faresSubscriptions(req: operations.FaresSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.FaresSubscriptionsResponse>;
    /**
     * lhDeepLinksFfp - LH Deep Links - FFP
     *
     * Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)
    **/
    lhDeepLinksFfp(req: operations.LhDeepLinksFfpRequest, config?: AxiosRequestConfig): Promise<operations.LhDeepLinksFfpResponse>;
    /**
     * lhDeepLinksItco - LH Deep Links - ITCO
     *
     * Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)
    **/
    lhDeepLinksItco(req: operations.LhDeepLinksItcoRequest, config?: AxiosRequestConfig): Promise<operations.LhDeepLinksItcoResponse>;
    /**
     * lowestFares - Lowest Fares
     *
     * Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH
    **/
    lowestFares(req: operations.LowestFaresRequest, config?: AxiosRequestConfig): Promise<operations.LowestFaresResponse>;
    /**
     * ondRoute - OND Route
     *
     * Returns LH route origin & destination information
    **/
    ondRoute(req: operations.OndRouteRequest, config?: AxiosRequestConfig): Promise<operations.OndRouteResponse>;
    /**
     * ondStatus - OND Status
     *
     * Returns LH network route status information. Search for recently added or retired routes
    **/
    ondStatus(req: operations.OndStatusRequest, config?: AxiosRequestConfig): Promise<operations.OndStatusResponse>;
    /**
     * topOnd - Top OND
     *
     * Returns LH Top routes per country or across all countries
    **/
    topOnd(req: operations.TopOndRequest, config?: AxiosRequestConfig): Promise<operations.TopOndResponse>;
}
