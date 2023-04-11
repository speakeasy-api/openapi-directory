import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An enumeration.
 */
export declare enum MeasurementsGetV1V1MeasurementsGetOrderByMeasOrderEnum {
    City = "city",
    Country = "country",
    Location = "location",
    Datetime = "datetime"
}
/**
 * An enumeration.
 */
export declare enum MeasurementsGetV1V1MeasurementsGetSortSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class MeasurementsGetV1V1MeasurementsGetRequest extends SpeakeasyBase {
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
    dateFrom?: any;
    dateTo?: any;
    /**
     * An enumeration.
     */
    entity?: shared.EntityTypesEnum;
    format?: string;
    hasGeo?: boolean;
    includeFields?: string;
    isAnalysis?: boolean;
    isMobile?: boolean;
    /**
     * Change the number of results returned.
     */
    limit?: number;
    location?: any[];
    locationId?: number;
    offset?: number;
    /**
     * An enumeration.
     */
    orderBy?: MeasurementsGetV1V1MeasurementsGetOrderByMeasOrderEnum;
    /**
     * Paginate through results.
     */
    page?: number;
    parameter?: any[];
    parameterId?: number;
    project?: number;
    radius?: number;
    /**
     * An enumeration.
     */
    sensorType?: shared.SensorTypesEnum;
    /**
     * An enumeration.
     */
    sort?: MeasurementsGetV1V1MeasurementsGetSortSortEnum;
    unit?: string[];
    valueFrom?: number;
    valueTo?: number;
}
export declare class MeasurementsGetV1V1MeasurementsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    measurementsGetV1V1MeasurementsGet200ApplicationJSONAny?: any;
}
