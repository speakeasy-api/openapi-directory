import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The direction to sort the result countries by.
 */
export declare enum GetCountriesOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}
/**
 * The term to sort the result countries by.
 */
export declare enum GetCountriesSortEnum {
    Key = "key",
    Label = "label"
}
export declare class GetCountriesRequest extends SpeakeasyBase {
    /**
     * MarketId in which the request is being made, and for which responses should be localized
     */
    marketId: string;
    /**
     * The direction to sort the result countries by.
     */
    order?: GetCountriesOrderEnum;
    /**
     * Restrict countries to this region name; required if regionTypeId is supplied
     */
    regionName?: string;
    /**
     * Restrict countries to this region type; required if regionName is supplied
     */
    regionTypeId?: number;
    /**
     * The term to sort the result countries by.
     */
    sort?: GetCountriesSortEnum;
}
export declare class GetCountriesResponse extends SpeakeasyBase {
    /**
     * Request was successful
     */
    arrayOfCountrySummary?: shared.CountrySummary[];
    contentType: string;
    /**
     * marketId is required<br>regionTypeId is not a valid integer<br>regionName is required when regionTypeId is provided<br>regionTypeId is required when regionName is provided
     */
    error?: shared.ErrorT;
    /**
     * Too many requests received within interval
     */
    errorLimit?: shared.ErrorLimit;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
