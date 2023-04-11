import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETUserContentRecentJson200ApplicationJSONDebug extends SpeakeasyBase {
    version?: number;
}
export declare class GETUserContentRecentJson200ApplicationJSONResultsCommentsAssetAllProperties extends SpeakeasyBase {
    description?: string;
    name?: string;
    properties?: Record<string, any>[];
}
export declare class GETUserContentRecentJson200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOn extends SpeakeasyBase {
    groupID?: number;
    taxonomyID?: number;
}
export declare class GETUserContentRecentJson200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortEditors extends SpeakeasyBase {
    groupID?: number;
    taxonomyID?: number;
}
export declare class GETUserContentRecentJson200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOff extends SpeakeasyBase {
    groupID?: number;
    taxonomyID?: number;
}
export declare class GETUserContentRecentJson200ApplicationJSONResultsCommentsAssetProperties extends SpeakeasyBase {
    automoderationOn?: GETUserContentRecentJson200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOn;
    commentListSortEditors?: GETUserContentRecentJson200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortEditors;
    reachedMaxComOff?: GETUserContentRecentJson200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOff;
}
export declare class GETUserContentRecentJson200ApplicationJSONResultsCommentsAsset extends SpeakeasyBase {
    allProperties?: GETUserContentRecentJson200ApplicationJSONResultsCommentsAssetAllProperties[];
    assetID?: number;
    assetTitle?: string;
    assetURL?: string;
    createDate?: string;
    labels?: Record<string, any>[];
    properties?: GETUserContentRecentJson200ApplicationJSONResultsCommentsAssetProperties;
    source?: string;
    taxonomy?: string;
    text?: Record<string, any>[];
    updateDate?: string;
    vendorID?: string;
}
export declare class GETUserContentRecentJson200ApplicationJSONResultsComments extends SpeakeasyBase {
    approveDate?: string;
    asset?: GETUserContentRecentJson200ApplicationJSONResultsCommentsAsset;
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
export declare class GETUserContentRecentJson200ApplicationJSONResults extends SpeakeasyBase {
    apiTimestamp?: string;
    comments?: GETUserContentRecentJson200ApplicationJSONResultsComments[];
    totalCommentsReturned?: number;
}
export declare class GETUserContentRecentJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    debug?: GETUserContentRecentJson200ApplicationJSONDebug;
    results?: GETUserContentRecentJson200ApplicationJSONResults;
    status?: string;
}
export declare class GETUserContentRecentJsonResponse extends SpeakeasyBase {
    contentType: string;
    getUserContentRecentJSON200ApplicationJSONObject?: GETUserContentRecentJson200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
