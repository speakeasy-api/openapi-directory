import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest?: shared.GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest;
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Required. The name of the agent to delete all entities types for. Supported formats: - `projects//agent`, - `projects//locations//agent`.
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
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
