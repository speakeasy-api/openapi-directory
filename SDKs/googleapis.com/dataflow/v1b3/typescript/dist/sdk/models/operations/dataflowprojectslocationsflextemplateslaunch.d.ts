import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1;
    option2?: DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2;
    option3?: DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3;
    option4?: DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4;
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    launchFlexTemplateRequest?: shared.LaunchFlexTemplateRequest;
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
     * Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. E.g., us-central1, us-west1.
     */
    location: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Required. The ID of the Cloud Platform project that the job belongs to.
     */
    projectId: string;
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
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    launchFlexTemplateResponse?: shared.LaunchFlexTemplateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
