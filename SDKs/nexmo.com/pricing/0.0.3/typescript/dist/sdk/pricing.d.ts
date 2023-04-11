import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pricing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve outbound pricing for a specific dialing prefix.
     *
     * @remarks
     * Retrieves the pricing information based on the dialing prefix.
     *
     */
    retrievePrefixPricing(req: operations.RetrievePrefixPricingRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePrefixPricingResponse>;
    /**
     * Retrieve outbound pricing for all countries.
     *
     * @remarks
     * Retrieves the pricing information for all countries.
     *
     */
    retrievePricingAllCountries(req: operations.RetrievePricingAllCountriesRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePricingAllCountriesResponse>;
    /**
     * Retrieve outbound pricing for a specific country.
     *
     * @remarks
     * Retrieves the pricing information based on the specified country.
     *
     */
    retrievePricingCountry(req: operations.RetrievePricingCountryRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePricingCountryResponse>;
}
