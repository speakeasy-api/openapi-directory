import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTracksTrackIdCommentsPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class PostTracksTrackIdCommentsRequestBodyComment extends SpeakeasyBase {
    body: string;
    timestamp?: any;
}
export declare class PostTracksTrackIdCommentsRequestBody extends SpeakeasyBase {
    comment?: PostTracksTrackIdCommentsRequestBodyComment;
}
export declare class PostTracksTrackIdCommentsSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class PostTracksTrackIdCommentsRequest extends SpeakeasyBase {
    pathParams: PostTracksTrackIdCommentsPathParams;
    request: PostTracksTrackIdCommentsRequestBody;
    security: PostTracksTrackIdCommentsSecurity;
}
export declare class PostTracksTrackIdCommentsResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    tooManyRequests?: shared.TooManyRequests;
}
