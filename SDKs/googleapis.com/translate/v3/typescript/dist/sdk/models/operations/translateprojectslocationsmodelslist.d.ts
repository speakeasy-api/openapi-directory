import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TranslateProjectsLocationsModelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class TranslateProjectsLocationsModelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class TranslateProjectsLocationsModelsListSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsModelsListSecurityOption1;
    option2?: TranslateProjectsLocationsModelsListSecurityOption2;
}
export declare class TranslateProjectsLocationsModelsListRequest extends SpeakeasyBase {
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
     * Optional. An expression for filtering the models that will be returned. Supported filter: `dataset_id=${dataset_id}`
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
     * Optional. Requested page size. The server can return fewer results than requested.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListModels call.
     */
    pageToken?: string;
    /**
     * Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`
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
export declare class TranslateProjectsLocationsModelsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listModelsResponse?: shared.ListModelsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
