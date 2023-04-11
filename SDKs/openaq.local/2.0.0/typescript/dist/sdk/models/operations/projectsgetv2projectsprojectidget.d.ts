import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An enumeration.
 */
export declare enum ProjectsGetV2ProjectsProjectIdGetOrderByProjectsOrderEnum {
    Id = "id",
    Name = "name",
    Subtitle = "subtitle",
    FirstUpdated = "firstUpdated",
    LastUpdated = "lastUpdated"
}
/**
 * An enumeration.
 */
export declare enum ProjectsGetV2ProjectsProjectIdGetSortSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class ProjectsGetV2ProjectsProjectIdGetRequest extends SpeakeasyBase {
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
    isAnalysis?: boolean;
    isMobile?: boolean;
    /**
     * Change the number of results returned.
     */
    limit?: number;
    offset?: number;
    /**
     * An enumeration.
     */
    orderBy?: ProjectsGetV2ProjectsProjectIdGetOrderByProjectsOrderEnum;
    /**
     * Paginate through results.
     */
    page?: number;
    parameter?: any[];
    parameterId?: number;
    project?: any[];
    projectId: number;
    sensorType?: string;
    /**
     * Define sort order.
     */
    sort?: ProjectsGetV2ProjectsProjectIdGetSortSortEnum;
    sourceName?: string[];
    unit?: string[];
}
export declare class ProjectsGetV2ProjectsProjectIdGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * Successful Response
     */
    openAQProjectsResult?: shared.OpenAQProjectsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
