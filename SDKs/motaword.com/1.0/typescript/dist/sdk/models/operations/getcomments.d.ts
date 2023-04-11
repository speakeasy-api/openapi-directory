import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCommentsRequest extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetCommentsResponse extends SpeakeasyBase {
    /**
     * A list of Comment models
     */
    commentList?: shared.CommentList;
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
