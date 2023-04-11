import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An enumeration.
 */
export declare enum CountriesGetV2CountriesGetOrderByCountriesOrderEnum {
    Country = "country",
    FirstUpdated = "firstUpdated",
    LastUpdated = "lastUpdated",
    Locations = "locations",
    Count = "count"
}
/**
 * An enumeration.
 */
export declare enum CountriesGetV2CountriesGetSortSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class CountriesGetV2CountriesGetRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     *         Limit results by a certain country using two letter country code.
     *         (ex. ?country=US or ?country=US&country=MX)
     *
     */
    country?: string[];
    /**
     *
     * @remarks
     *         Limit results by a certain country using two letter country code.
     *         (ex. /US)
     *
     */
    countryId?: string;
    limit?: number;
    offset?: number;
    /**
     * An enumeration.
     */
    orderBy?: CountriesGetV2CountriesGetOrderByCountriesOrderEnum;
    /**
     * Paginate through results.
     */
    page?: number;
    /**
     * Define sort order.
     */
    sort?: CountriesGetV2CountriesGetSortSortEnum;
}
export declare class CountriesGetV2CountriesGetResponse extends SpeakeasyBase {
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
