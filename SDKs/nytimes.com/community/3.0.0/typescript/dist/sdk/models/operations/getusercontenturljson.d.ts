import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETUserContentUrlJsonSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GETUserContentUrlJsonRequest extends SpeakeasyBase {
    url?: string;
}
export declare class GETUserContentUrlJson200ApplicationJSONDebug extends SpeakeasyBase {
    version?: number;
}
export declare class GETUserContentUrlJson200ApplicationJSONResultsComments extends SpeakeasyBase {
    approveDate?: string;
    commentBody?: string;
    commentID?: number;
    commentSequence?: number;
    commentTitle?: string;
    commentType?: string;
    createDate?: string;
    depth?: number;
    editorsSelection?: boolean;
    parentID?: any;
    parentUserDisplayName?: any;
    permID?: string;
    picURL?: string;
    recommendations?: number;
    recommendedFlag?: any;
    replies?: any[];
    replyCount?: number;
    reportAbuseFlag?: any;
    sharing?: number;
    status?: string;
    timespeople?: number;
    trusted?: number;
    updateDate?: string;
    userDisplayName?: string;
    userID?: number;
    userLocation?: string;
    userTitle?: any;
    userURL?: any;
}
export declare class GETUserContentUrlJson200ApplicationJSONResults extends SpeakeasyBase {
    apiTimestamp?: string;
    callerID?: any;
    comments?: GETUserContentUrlJson200ApplicationJSONResultsComments[];
    depthLimit?: number;
    filter?: string;
    page?: number;
    replyLimit?: number;
    sort?: string;
    totalCommentsFound?: number;
    totalCommentsReturned?: number;
    totalEditorsSelectionFound?: number;
    totalEditorsSelectionReturned?: number;
    totalParentCommentsFound?: number;
    totalParentCommentsReturned?: number;
    totalRecommendationsFound?: number;
    totalRecommendationsReturned?: number;
    totalReplyCommentsFound?: number;
    totalReplyCommentsReturned?: number;
    totalReporterReplyCommentsFound?: number;
    totalReporterReplyCommentsReturned?: number;
}
export declare class GETUserContentUrlJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    debug?: GETUserContentUrlJson200ApplicationJSONDebug;
    results?: GETUserContentUrlJson200ApplicationJSONResults;
    status?: string;
}
export declare class GETUserContentUrlJsonResponse extends SpeakeasyBase {
    contentType: string;
    getUserContentUrlJSON200ApplicationJSONObject?: GETUserContentUrlJson200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
