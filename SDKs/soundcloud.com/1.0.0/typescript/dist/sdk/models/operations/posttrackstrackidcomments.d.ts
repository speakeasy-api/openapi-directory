import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTracksTrackIdCommentsSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class PostTracksTrackIdCommentsRequestBodyComment extends SpeakeasyBase {
    /**
     * Comment's content
     */
    body: string;
    /**
     * Timestamp of a comment. String or float representation is supported
     */
    timestamp?: any;
}
/**
 * Body of a comment
 *
 * @remarks
 *
 */
export declare class PostTracksTrackIdCommentsRequestBody extends SpeakeasyBase {
    comment?: PostTracksTrackIdCommentsRequestBodyComment;
}
export declare class PostTracksTrackIdCommentsRequest extends SpeakeasyBase {
    /**
     * Body of a comment
     *
     * @remarks
     *
     */
    requestBody: PostTracksTrackIdCommentsRequestBody;
    /**
     * SoundCloud Track id
     */
    trackId: number;
}
export declare class PostTracksTrackIdCommentsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    comment?: shared.Comment;
    contentType: string;
    /**
     * Unprocessable Entity
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Too Many Requests
     */
    tooManyRequests?: shared.TooManyRequests;
}
