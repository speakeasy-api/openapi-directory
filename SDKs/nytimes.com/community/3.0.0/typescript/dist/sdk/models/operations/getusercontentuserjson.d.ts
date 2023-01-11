import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserContentUserJsonQueryParams extends SpeakeasyBase {
    userID?: number;
}
export declare class GetUserContentUserJsonSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetUserContentUserJson200ApplicationJsonDebug extends SpeakeasyBase {
    version?: number;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties extends SpeakeasyBase {
    description?: string;
    name?: string;
    properties?: Record<string, any>[];
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels extends SpeakeasyBase {
    labelID?: number;
    labelName?: string;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff extends SpeakeasyBase {
    groupID?: number;
    taxonomyID?: number;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc extends SpeakeasyBase {
    groupID?: number;
    taxonomyID?: number;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn extends SpeakeasyBase {
    groupID?: number;
    taxonomyID?: number;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties extends SpeakeasyBase {
    automoderationOff?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff;
    commentListSortApprovedateDesc?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc;
    reachedMaxComOn?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAsset extends SpeakeasyBase {
    allProperties?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties[];
    assetID?: number;
    assetTitle?: string;
    assetURL?: string;
    createDate?: string;
    labels?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels[];
    properties?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties;
    source?: string;
    taxonomy?: string;
    text?: Record<string, any>[];
    updateDate?: string;
    vendorID?: string;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsComments extends SpeakeasyBase {
    approveDate?: string;
    asset?: GetUserContentUserJson200ApplicationJsonResultsCommentsAsset;
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
export declare class GetUserContentUserJson200ApplicationJsonResults extends SpeakeasyBase {
    apiTimestamp?: string;
    comments?: GetUserContentUserJson200ApplicationJsonResultsComments[];
    totalCommentsFound?: number;
    totalCommentsReturned?: number;
}
export declare class GetUserContentUserJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    debug?: GetUserContentUserJson200ApplicationJsonDebug;
    results?: GetUserContentUserJson200ApplicationJsonResults;
    status?: string;
}
export declare class GetUserContentUserJsonRequest extends SpeakeasyBase {
    queryParams: GetUserContentUserJsonQueryParams;
    security: GetUserContentUserJsonSecurity;
}
export declare class GetUserContentUserJsonResponse extends SpeakeasyBase {
    contentType: string;
    getUserContentUserJSON200ApplicationJSONObject?: GetUserContentUserJson200ApplicationJson;
    statusCode: number;
}
