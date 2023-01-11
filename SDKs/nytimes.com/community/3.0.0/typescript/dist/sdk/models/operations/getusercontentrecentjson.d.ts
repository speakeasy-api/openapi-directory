import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserContentRecentJsonSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetUserContentRecentJson200ApplicationJsonDebug extends SpeakeasyBase {
    version?: number;
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties extends SpeakeasyBase {
    description?: string;
    name?: string;
    properties?: Record<string, any>[];
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn extends SpeakeasyBase {
    groupID?: number;
    taxonomyID?: number;
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors extends SpeakeasyBase {
    groupID?: number;
    taxonomyID?: number;
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff extends SpeakeasyBase {
    groupID?: number;
    taxonomyID?: number;
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties extends SpeakeasyBase {
    automoderationOn?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn;
    commentListSortEditors?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors;
    reachedMaxComOff?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff;
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset extends SpeakeasyBase {
    allProperties?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties[];
    assetID?: number;
    assetTitle?: string;
    assetURL?: string;
    createDate?: string;
    labels?: Record<string, any>[];
    properties?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties;
    source?: string;
    taxonomy?: string;
    text?: Record<string, any>[];
    updateDate?: string;
    vendorID?: string;
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsComments extends SpeakeasyBase {
    approveDate?: string;
    asset?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset;
    assetID?: number;
    commentBody?: string;
    commentID?: number;
    commentSequence?: number;
    commentTitle?: string;
    commentType?: string;
    createDate?: string;
    displayName?: string;
    editorsSelection?: number;
    location?: string;
    parentID?: any;
    recommendationCount?: number;
    replies?: Record<string, any>[];
    status?: string;
    statusID?: number;
    updateDate?: string;
    userDisplayName?: string;
    userID?: number;
    userLocation?: string;
    userTitle?: string;
    userURL?: string;
}
export declare class GetUserContentRecentJson200ApplicationJsonResults extends SpeakeasyBase {
    apiTimestamp?: string;
    comments?: GetUserContentRecentJson200ApplicationJsonResultsComments[];
    totalCommentsReturned?: number;
}
export declare class GetUserContentRecentJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    debug?: GetUserContentRecentJson200ApplicationJsonDebug;
    results?: GetUserContentRecentJson200ApplicationJsonResults;
    status?: string;
}
export declare class GetUserContentRecentJsonRequest extends SpeakeasyBase {
    security: GetUserContentRecentJsonSecurity;
}
export declare class GetUserContentRecentJsonResponse extends SpeakeasyBase {
    contentType: string;
    getUserContentRecentJSON200ApplicationJSONObject?: GetUserContentRecentJson200ApplicationJson;
    statusCode: number;
}
