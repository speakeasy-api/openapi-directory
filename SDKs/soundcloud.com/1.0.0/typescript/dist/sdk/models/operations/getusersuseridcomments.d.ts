import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersUserIdCommentsSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class GetUsersUserIdCommentsRequest extends SpeakeasyBase {
    /**
     * Number of results to return in the collection.
     */
    limit?: number;
    /**
     * Offset of first result. Deprecated, use `linked_partitioning` instead.
     */
    offset?: number;
    /**
     * SoundCloud User id
     */
    userId: number;
}
export declare class GetUsersUserIdCommentsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    commentsList?: shared.Comment[];
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
