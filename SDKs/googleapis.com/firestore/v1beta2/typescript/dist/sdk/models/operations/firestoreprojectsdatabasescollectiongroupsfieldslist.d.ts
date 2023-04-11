import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1;
    option2?: FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest extends SpeakeasyBase {
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
     * The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
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
     * The number of results to return.
     */
    pageSize?: number;
    /**
     * A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results.
     */
    pageToken?: string;
    /**
     * A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
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
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleFirestoreAdminV1beta2ListFieldsResponse?: shared.GoogleFirestoreAdminV1beta2ListFieldsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
