import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageObjectsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsListSecurity extends SpeakeasyBase {
    option1?: StorageObjectsListSecurityOption1;
    option2?: StorageObjectsListSecurityOption2;
    option3?: StorageObjectsListSecurityOption3;
}
/**
 * Set of properties to return. Defaults to noAcl.
 */
export declare enum StorageObjectsListProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsListRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Name of the bucket in which to look for objects.
     */
    bucket: string;
    /**
     * Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     */
    delimiter?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Filter results to objects whose names begin with this prefix.
     */
    prefix?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Set of properties to return. Defaults to noAcl.
     */
    projection?: StorageObjectsListProjectionEnum;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * If true, lists all versions of a file as distinct results.
     */
    versions?: boolean;
}
export declare class StorageObjectsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    objects?: shared.Objects;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
