import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleCloudDialogflowV2beta1AnalyzeContentRequest?: shared.GoogleCloudDialogflowV2beta1AnalyzeContentRequest;
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
     * Required. The name of the participant this text comes from. Format: `projects//locations//conversations//participants/`.
     */
    participant: string;
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
export declare class DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudDialogflowV2beta1AnalyzeContentResponse?: shared.GoogleCloudDialogflowV2beta1AnalyzeContentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
