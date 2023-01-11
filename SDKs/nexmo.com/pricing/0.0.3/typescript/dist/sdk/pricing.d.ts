import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pricing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * retrievePrefixPricing - Retrieve outbound pricing for a specific dialing prefix.
     *
     * Retrieves the pricing information based on the dialing prefix.
     *
    **/
    retrievePrefixPricing(req: operations.RetrievePrefixPricingRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePrefixPricingResponse>;
    /**
     * retrievePricingAllCountries - Retrieve outbound pricing for all countries.
     *
     * Retrieves the pricing information for all countries.
     *
    **/
    retrievePricingAllCountries(req: operations.RetrievePricingAllCountriesRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePricingAllCountriesResponse>;
    /**
     * retrievePricingCountry - Retrieve outbound pricing for a specific country.
     *
     * Retrieves the pricing information based on the specified country.
     *
    **/
    retrievePricingCountry(req: operations.RetrievePricingCountryRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePricingCountryResponse>;
}
