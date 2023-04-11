import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MonitoringServicesServiceLevelObjectivesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringServicesServiceLevelObjectivesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringServicesServiceLevelObjectivesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringServicesServiceLevelObjectivesListSecurity extends SpeakeasyBase {
    option1?: MonitoringServicesServiceLevelObjectivesListSecurityOption1;
    option2?: MonitoringServicesServiceLevelObjectivesListSecurityOption2;
    option3?: MonitoringServicesServiceLevelObjectivesListSecurityOption3;
}
/**
 * View of the ServiceLevelObjectives to return. If DEFAULT, return each ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed.
 */
export declare enum MonitoringServicesServiceLevelObjectivesListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Full = "FULL",
    Explicit = "EXPLICIT"
}
export declare class MonitoringServicesServiceLevelObjectivesListRequest extends SpeakeasyBase {
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
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * A filter specifying what ServiceLevelObjectives to return.
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * A non-negative number that is the maximum number of results to return. When 0, use default page size.
     */
    pageSize?: number;
    /**
     * If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the parent containing the listed SLOs, either a project or a Monitoring Metrics Scope. The formats are: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] workspaces/[HOST_PROJECT_ID_OR_NUMBER]/services/-
     */
    parent: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * View of the ServiceLevelObjectives to return. If DEFAULT, return each ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed.
     */
    view?: MonitoringServicesServiceLevelObjectivesListViewEnum;
}
export declare class MonitoringServicesServiceLevelObjectivesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listServiceLevelObjectivesResponse?: shared.ListServiceLevelObjectivesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
