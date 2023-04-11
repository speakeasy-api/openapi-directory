import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AutomlProjectsLocationsDatasetsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AutomlProjectsLocationsDatasetsListRequest extends SpeakeasyBase {
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
     * An expression for filtering the results of the request. * `dataset_metadata` - for existence of the case (e.g. `image_classification_dataset_metadata:*`). Some examples of using the filter are: * `translation_dataset_metadata:*` --> The dataset has `translation_dataset_metadata`.
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
     * Requested page size. Server may return fewer results than requested. If unspecified, server will pick a default size.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results for the server to return Typically obtained via ListDatasetsResponse.next_page_token of the previous AutoMl.ListDatasets call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the project from which to list datasets.
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
export declare class AutomlProjectsLocationsDatasetsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listDatasetsResponse?: shared.ListDatasetsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
