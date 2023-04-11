import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An enumeration.
 */
export declare enum CountriesGetV2CountriesCountryIdGetOrderByCountriesOrderEnum {
    Country = "country",
    FirstUpdated = "firstUpdated",
    LastUpdated = "lastUpdated",
    Locations = "locations",
    Count = "count"
}
/**
 * An enumeration.
 */
export declare enum CountriesGetV2CountriesCountryIdGetSortSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class CountriesGetV2CountriesCountryIdGetRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     *         Limit results by a certain country using two letter country code.
     *         (ex. ?country=US or ?country=US&country=MX)
     *
     */
    country?: string[];
    countryId: string;
    limit?: number;
    offset?: number;
    /**
     * An enumeration.
     */
    orderBy?: CountriesGetV2CountriesCountryIdGetOrderByCountriesOrderEnum;
    /**
     * Paginate through results.
     */
    page?: number;
    /**
     * Define sort order.
     */
    sort?: CountriesGetV2CountriesCountryIdGetSortSortEnum;
}
export declare class CountriesGetV2CountriesCountryIdGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * Successful Response
     */
    openAQCountriesResult?: shared.OpenAQCountriesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
