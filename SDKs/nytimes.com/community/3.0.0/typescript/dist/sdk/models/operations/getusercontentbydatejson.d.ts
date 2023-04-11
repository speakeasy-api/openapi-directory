import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETUserContentByDateJsonSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GETUserContentByDateJsonRequest extends SpeakeasyBase {
    date?: string;
}
export declare class GETUserContentByDateJson200ApplicationJSONDebug extends SpeakeasyBase {
    version?: number;
}
export declare class GETUserContentByDateJson200ApplicationJSONResultsComments extends SpeakeasyBase {
    approveDate?: string;
    assetID?: number;
    assetURL?: string;
    commentBody?: string;
    commentID?: number;
    commentSequence?: number;
    commentTitle?: string;
    commentType?: string;
    createDate?: string;
    editorsSelection?: number;
    lft?: number;
    parentID?: any;
    recommendationCount?: number;
    replies?: Record<string, any>[];
    replyCount?: number;
    rgt?: number;
    status?: string;
    statusID?: number;
    updateDate?: string;
    userDisplayName?: string;
    userID?: number;
    userLocation?: string;
    userTitle?: string;
    userURL?: number;
}
export declare class GETUserContentByDateJson200ApplicationJSONResults extends SpeakeasyBase {
    apiTimestamp?: string;
    comments?: GETUserContentByDateJson200ApplicationJSONResultsComments[];
    totalCommentsFound?: number;
    totalCommentsReturned?: number;
}
export declare class GETUserContentByDateJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    debug?: GETUserContentByDateJson200ApplicationJSONDebug;
    results?: GETUserContentByDateJson200ApplicationJSONResults;
    status?: string;
}
export declare class GETUserContentByDateJsonResponse extends SpeakeasyBase {
    contentType: string;
    getUserContentByDateJSON200ApplicationJSONObject?: GETUserContentByDateJson200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
