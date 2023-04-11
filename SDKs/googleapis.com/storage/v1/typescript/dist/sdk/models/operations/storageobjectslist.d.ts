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
export declare class StorageObjectsListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsListSecurity extends SpeakeasyBase {
    option1?: StorageObjectsListSecurityOption1;
    option2?: StorageObjectsListSecurityOption2;
    option3?: StorageObjectsListSecurityOption3;
    option4?: StorageObjectsListSecurityOption4;
    option5?: StorageObjectsListSecurityOption5;
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
     * Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     */
    endOffset?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.
     */
    includeTrailingDelimiter?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Filter results to objects and prefixes that match this glob pattern.
     */
    matchGlob?: string;
    /**
     * Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
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
     * Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     */
    startOffset?: string;
    /**
     * Upload protocol for media (e.g. "media", "multipart", "resumable").
     */
    uploadType?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
    /**
     * If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
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
