import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MonitoringServicesServiceLevelObjectivesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringServicesServiceLevelObjectivesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringServicesServiceLevelObjectivesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringServicesServiceLevelObjectivesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringServicesServiceLevelObjectivesGetSecurity extends SpeakeasyBase {
    option1?: MonitoringServicesServiceLevelObjectivesGetSecurityOption1;
    option2?: MonitoringServicesServiceLevelObjectivesGetSecurityOption2;
    option3?: MonitoringServicesServiceLevelObjectivesGetSecurityOption3;
    option4?: MonitoringServicesServiceLevelObjectivesGetSecurityOption4;
}
/**
 * View of the ServiceLevelObjective to return. If DEFAULT, return the ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed.
 */
export declare enum MonitoringServicesServiceLevelObjectivesGetViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Full = "FULL",
    Explicit = "EXPLICIT"
}
export declare class MonitoringServicesServiceLevelObjectivesGetRequest extends SpeakeasyBase {
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
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. Resource name of the ServiceLevelObjective to get. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME]
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
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
     * View of the ServiceLevelObjective to return. If DEFAULT, return the ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed.
     */
    view?: MonitoringServicesServiceLevelObjectivesGetViewEnum;
}
export declare class MonitoringServicesServiceLevelObjectivesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    serviceLevelObjective?: shared.ServiceLevelObjective;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
