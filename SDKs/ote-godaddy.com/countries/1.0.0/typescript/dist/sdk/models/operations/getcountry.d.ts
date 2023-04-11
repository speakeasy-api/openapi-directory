import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The direction to sort the result country states by.
 */
export declare enum GetCountryOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}
/**
 * The term to sort the result country states by.
 */
export declare enum GetCountrySortEnum {
    Key = "key",
    Label = "label"
}
export declare class GetCountryRequest extends SpeakeasyBase {
    /**
     * The country key
     */
    countryKey: string;
    /**
     * MarketId in which the request is being made, and for which responses should be localized
     */
    marketId: string;
    /**
     * The direction to sort the result country states by.
     */
    order?: GetCountryOrderEnum;
    /**
     * The term to sort the result country states by.
     */
    sort?: GetCountrySortEnum;
}
export declare class GetCountryResponse extends SpeakeasyBase {
    /**
     * Request was successful
     */
    arrayOfCountry?: shared.Country[];
    contentType: string;
    /**
     * Country not found
     */
    error?: shared.ErrorT;
    /**
     * Too many requests received within interval
     */
    errorLimit?: shared.ErrorLimit;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
