import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETUserContentUserJsonSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GETUserContentUserJsonRequest extends SpeakeasyBase {
    userID?: number;
}
export declare class GETUserContentUserJson200ApplicationJSONDebug extends SpeakeasyBase {
    version?: number;
}
export declare class GETUserContentUserJson200ApplicationJSONResultsCommentsAssetAllProperties extends SpeakeasyBase {
    description?: string;
    name?: string;
    properties?: Record<string, any>[];
}
export declare class GETUserContentUserJson200ApplicationJSONResultsCommentsAssetLabels extends SpeakeasyBase {
    labelID?: number;
    labelName?: string;
}
export declare class GETUserContentUserJson200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOff extends SpeakeasyBase {
    groupID?: number;
    taxonomyID?: number;
}
export declare class GETUserContentUserJson200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortApprovedateDesc extends SpeakeasyBase {
    groupID?: number;
    taxonomyID?: number;
}
export declare class GETUserContentUserJson200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOn extends SpeakeasyBase {
    groupID?: number;
    taxonomyID?: number;
}
export declare class GETUserContentUserJson200ApplicationJSONResultsCommentsAssetProperties extends SpeakeasyBase {
    automoderationOff?: GETUserContentUserJson200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOff;
    commentListSortApprovedateDesc?: GETUserContentUserJson200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortApprovedateDesc;
    reachedMaxComOn?: GETUserContentUserJson200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOn;
}
export declare class GETUserContentUserJson200ApplicationJSONResultsCommentsAsset extends SpeakeasyBase {
    allProperties?: GETUserContentUserJson200ApplicationJSONResultsCommentsAssetAllProperties[];
    assetID?: number;
    assetTitle?: string;
    assetURL?: string;
    createDate?: string;
    labels?: GETUserContentUserJson200ApplicationJSONResultsCommentsAssetLabels[];
    properties?: GETUserContentUserJson200ApplicationJSONResultsCommentsAssetProperties;
    source?: string;
    taxonomy?: string;
    text?: Record<string, any>[];
    updateDate?: string;
    vendorID?: string;
}
export declare class GETUserContentUserJson200ApplicationJSONResultsComments extends SpeakeasyBase {
    approveDate?: string;
    asset?: GETUserContentUserJson200ApplicationJSONResultsCommentsAsset;
    commentBody?: string;
    commentID?: number;
    commentSequence?: number;
    commentTitle?: string;
    commentType?: string;
    createDate?: string;
    editorsSelection?: boolean;
    labels?: Record<string, any>[];
    parentID?: any;
    permid?: number;
    picURL?: string;
    recommendations?: number;
    replies?: Record<string, any>[];
    replyCount?: number;
    status?: string;
    updateDate?: string;
    userDisplayName?: any;
    userID?: number;
    userLocation?: any;
    userSubmittedDisplayName?: string;
    userSubmittedLocation?: string;
    userSubmittedTitle?: any;
    userSubmittedURL?: any;
    userTitle?: any;
    userURL?: any;
}
export declare class GETUserContentUserJson200ApplicationJSONResults extends SpeakeasyBase {
    apiTimestamp?: string;
    comments?: GETUserContentUserJson200ApplicationJSONResultsComments[];
    totalCommentsFound?: number;
    totalCommentsReturned?: number;
}
export declare class GETUserContentUserJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    debug?: GETUserContentUserJson200ApplicationJSONDebug;
    results?: GETUserContentUserJson200ApplicationJSONResults;
    status?: string;
}
export declare class GETUserContentUserJsonResponse extends SpeakeasyBase {
    contentType: string;
    getUserContentUserJSON200ApplicationJSONObject?: GETUserContentUserJson200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
