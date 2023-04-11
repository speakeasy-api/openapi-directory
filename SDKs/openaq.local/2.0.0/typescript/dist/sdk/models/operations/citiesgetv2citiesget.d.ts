import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An enumeration.
 */
export declare enum CitiesGetV2CitiesGetOrderByCitiesOrderEnum {
    City = "city",
    Country = "country",
    FirstUpdated = "firstUpdated",
    LastUpdated = "lastUpdated"
}
/**
 * An enumeration.
 */
export declare enum CitiesGetV2CitiesGetSortSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class CitiesGetV2CitiesGetRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     *         Limit results by a certain city or cities.
     *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
     *
     */
    city?: string[];
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
    entity?: string;
    /**
     * Change the number of results returned.
     */
    limit?: number;
    offset?: number;
    /**
     * Order by a field
     */
    orderBy?: CitiesGetV2CitiesGetOrderByCitiesOrderEnum;
    /**
     * Paginate through results.
     */
    page?: number;
    /**
     * Define sort order.
     */
    sort?: CitiesGetV2CitiesGetSortSortEnum;
}
export declare class CitiesGetV2CitiesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * Successful Response
     */
    openAQCitiesResult?: shared.OpenAQCitiesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
