import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitCommentJsonRequest extends SpeakeasyBase {
    comment?: shared.Comment;
    /**
     * Activity ID
     */
    activityId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class SubmitCommentJsonResponse extends SpeakeasyBase {
    /**
     * Comment model
     */
    comment?: shared.Comment;
    contentType: string;
    /**
     * ProjectActivityNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
