import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetActivityCommentsRequest extends SpeakeasyBase {
    /**
     * Activity ID
     */
    activityId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetActivityCommentsResponse extends SpeakeasyBase {
    /**
     * A list of Comment models
     */
    commentList?: shared.CommentList;
    contentType: string;
    /**
     * ProjectActivityNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
