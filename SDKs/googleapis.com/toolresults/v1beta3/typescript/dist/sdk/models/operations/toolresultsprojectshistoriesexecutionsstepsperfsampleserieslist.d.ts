import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare enum ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum {
    PerfMetricTypeUnspecified = "perfMetricTypeUnspecified",
    Memory = "memory",
    Cpu = "cpu",
    Network = "network",
    Graphics = "graphics"
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * A tool results execution ID.
     */
    executionId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Specify one or more PerfMetricType values such as CPU to filter the result
     */
    filter?: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum[];
    /**
     * A tool results history ID.
     */
    historyId: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * The cloud project
     */
    projectId: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * A tool results step ID.
     */
    stepId: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listPerfSampleSeriesResponse?: shared.ListPerfSampleSeriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
