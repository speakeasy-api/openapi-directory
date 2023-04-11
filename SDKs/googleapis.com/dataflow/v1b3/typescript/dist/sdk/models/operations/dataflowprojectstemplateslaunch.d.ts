import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsTemplatesLaunchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsTemplatesLaunchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsTemplatesLaunchSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsTemplatesLaunchSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsTemplatesLaunchSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsTemplatesLaunchSecurityOption1;
    option2?: DataflowProjectsTemplatesLaunchSecurityOption2;
    option3?: DataflowProjectsTemplatesLaunchSecurityOption3;
    option4?: DataflowProjectsTemplatesLaunchSecurityOption4;
}
export declare class DataflowProjectsTemplatesLaunchRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    launchTemplateParameters?: shared.LaunchTemplateParameters;
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
     * Path to dynamic template spec file on Cloud Storage. The file must be a Json serialized DynamicTemplateFieSpec object.
     */
    dynamicTemplateGcsPath?: string;
    /**
     * Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.
     */
    dynamicTemplateStagingLocation?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
     */
    gcsPath?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     */
    location?: string;
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
    /**
     * If true, the request is validated but not actually executed. Defaults to false.
     */
    validateOnly?: boolean;
}
export declare class DataflowProjectsTemplatesLaunchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    launchTemplateResponse?: shared.LaunchTemplateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
