import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An enumeration.
 */
export declare enum CountriesGetv1V1CountriesGetOrderByCountriesOrderEnum {
    Country = "country",
    FirstUpdated = "firstUpdated",
    LastUpdated = "lastUpdated",
    Locations = "locations",
    Count = "count"
}
/**
 * An enumeration.
 */
export declare enum CountriesGetv1V1CountriesGetSortSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class CountriesGetv1V1CountriesGetRequest extends SpeakeasyBase {
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
    orderBy?: CountriesGetv1V1CountriesGetOrderByCountriesOrderEnum;
    /**
     * Paginate through results.
     */
    page?: number;
    /**
     * Define sort order.
     */
    sort?: CountriesGetv1V1CountriesGetSortSortEnum;
}
export declare class CountriesGetv1V1CountriesGetResponse extends SpeakeasyBase {
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
