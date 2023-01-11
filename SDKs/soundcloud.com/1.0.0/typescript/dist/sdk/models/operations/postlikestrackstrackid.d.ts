import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLikesTracksTrackIdPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class PostLikesTracksTrackIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class PostLikesTracksTrackIdRequest extends SpeakeasyBase {
    pathParams: PostLikesTracksTrackIdPathParams;
    security: PostLikesTracksTrackIdSecurity;
}
export declare class PostLikesTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    tooManyRequests?: shared.TooManyRequests;
}
