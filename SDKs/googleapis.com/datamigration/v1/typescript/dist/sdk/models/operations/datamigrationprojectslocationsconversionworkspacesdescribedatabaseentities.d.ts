import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The tree to fetch.
 */
export declare enum DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnum {
    DbTreeTypeUnspecified = "DB_TREE_TYPE_UNSPECIFIED",
    SourceTree = "SOURCE_TREE",
    DraftTree = "DRAFT_TREE",
    DestinationTree = "DESTINATION_TREE"
}
export declare class DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesRequest extends SpeakeasyBase {
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
     * Request a specific commit ID. If not specified, the entities from the latest commit are returned.
     */
    commitId?: string;
    /**
     * Required. Name of the conversion workspace resource whose database entities are described. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     */
    conversionWorkspace: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Filter the returned entities based on AIP-160 standard.
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
     * The maximum number of entities to return. The service may return fewer entities than the value specifies.
     */
    pageSize?: number;
    /**
     * The nextPageToken value received in the previous call to conversionWorkspace.describeDatabaseEntities, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to conversionWorkspace.describeDatabaseEntities must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The tree to fetch.
     */
    tree?: DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnum;
    /**
     * Whether to retrieve the latest committed version of the entities or the latest version. This field is ignored if a specific commit_id is specified.
     */
    uncommitted?: boolean;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    describeDatabaseEntitiesResponse?: shared.DescribeDatabaseEntitiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
