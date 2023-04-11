import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsLocationsTemplatesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsTemplatesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsTemplatesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsTemplatesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsTemplatesGetSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsTemplatesGetSecurityOption1;
    option2?: DataflowProjectsLocationsTemplatesGetSecurityOption2;
    option3?: DataflowProjectsLocationsTemplatesGetSecurityOption3;
    option4?: DataflowProjectsLocationsTemplatesGetSecurityOption4;
}
/**
 * The view to retrieve. Defaults to METADATA_ONLY.
 */
export declare enum DataflowProjectsLocationsTemplatesGetViewEnum {
    MetadataOnly = "METADATA_ONLY"
}
export declare class DataflowProjectsLocationsTemplatesGetRequest extends SpeakeasyBase {
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
     * Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
     */
    gcsPath?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
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
    /**
     * The view to retrieve. Defaults to METADATA_ONLY.
     */
    view?: DataflowProjectsLocationsTemplatesGetViewEnum;
}
export declare class DataflowProjectsLocationsTemplatesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    getTemplateResponse?: shared.GetTemplateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
