import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An enumeration.
 */
export declare enum AveragesV2GetV2AveragesGetSortSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class AveragesV2GetV2AveragesGetRequest extends SpeakeasyBase {
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
    group?: boolean;
    /**
     * Change the number of results returned.
     */
    limit?: number;
    location?: string[];
    offset?: number;
    /**
     * Paginate through results.
     */
    page?: number;
    parameter?: any[];
    parameterId?: number;
    project?: any[];
    projectId?: number;
    /**
     * Define sort order.
     */
    sort?: AveragesV2GetV2AveragesGetSortSortEnum;
    /**
     * An enumeration.
     */
    spatial: shared.SpatialEnum;
    /**
     * An enumeration.
     */
    temporal: shared.TemporalEnum;
    unit?: string[];
}
export declare class AveragesV2GetV2AveragesGetResponse extends SpeakeasyBase {
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
