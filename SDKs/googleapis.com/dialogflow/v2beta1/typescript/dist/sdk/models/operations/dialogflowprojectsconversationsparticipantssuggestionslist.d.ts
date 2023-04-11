import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1;
    option2?: DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsListRequest extends SpeakeasyBase {
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
     * Optional. Filter on suggestions fields. Currently predicates on `create_time` and `create_time_epoch_microseconds` are supported. `create_time` only support milliseconds accuracy. E.g., `create_time_epoch_microseconds > 1551790877964485` or `create_time > "2017-01-15T01:30:15.01Z"` For more information about filtering, see [API Filtering](https://aip.dev/160).
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
     * Optional. The maximum number of items to return in a single page. The default value is 100; the maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The name of the participant to fetch suggestions for. Format: `projects//locations//conversations//participants/`.
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
export declare class DialogflowProjectsConversationsParticipantsSuggestionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudDialogflowV2beta1ListSuggestionsResponse?: shared.GoogleCloudDialogflowV2beta1ListSuggestionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
