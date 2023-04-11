import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An enumeration.
 */
export declare enum LatestV1GetV1LatestGetOrderByLocationsOrderEnum {
    City = "city",
    Country = "country",
    Location = "location",
    SourceName = "sourceName",
    FirstUpdated = "firstUpdated",
    LastUpdated = "lastUpdated",
    Count = "count",
    Random = "random"
}
/**
 * An enumeration.
 */
export declare enum LatestV1GetV1LatestGetSortSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class LatestV1GetV1LatestGetRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     *         Limit results by a certain city or cities.
     *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
     *
     */
    city?: string[];
    coordinates?: string;
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
    dumpRaw?: boolean;
    /**
     * Source entity type.
     */
    entity?: shared.EntityTypesEnum;
    hasGeo?: boolean;
    /**
     * Data is the product of a previous analysis/aggregation and not raw measurements
     */
    isAnalysis?: boolean;
    /**
     * Location is mobile
     */
    isMobile?: boolean;
    /**
     * Change the number of results returned.
     */
    limit?: number;
    location?: any[];
    locationId?: number;
    /**
     * Manufacturer of Sensor
     */
    manufacturerName?: string[];
    /**
     * Model Name of Sensor
     */
    modelName?: string[];
    offset?: number;
    /**
     * Order by a field
     */
    orderBy?: LatestV1GetV1LatestGetOrderByLocationsOrderEnum;
    /**
     * Paginate through results.
     */
    page?: number;
    parameter?: any[];
    parameterId?: number;
    radius?: number;
    /**
     * Type of Sensor
     */
    sensorType?: shared.SensorTypesEnum;
    /**
     * Sort Direction
     */
    sort?: LatestV1GetV1LatestGetSortSortEnum;
    /**
     * Name of the data source
     */
    sourceName?: string[];
    unit?: string[];
}
export declare class LatestV1GetV1LatestGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * Successful Response
     */
    openAQResult?: shared.OpenAQResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
