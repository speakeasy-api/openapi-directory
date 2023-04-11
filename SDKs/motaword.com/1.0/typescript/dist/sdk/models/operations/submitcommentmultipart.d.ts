import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitCommentMultipartRequest extends SpeakeasyBase {
    comment1?: shared.Comment1;
    /**
     * Activity ID
     */
    activityId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class SubmitCommentMultipartResponse extends SpeakeasyBase {
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
