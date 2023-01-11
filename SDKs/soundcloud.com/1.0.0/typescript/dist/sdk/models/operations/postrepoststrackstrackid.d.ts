import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepostsTracksTrackIdPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class PostRepostsTracksTrackIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class PostRepostsTracksTrackIdRequest extends SpeakeasyBase {
    pathParams: PostRepostsTracksTrackIdPathParams;
    security: PostRepostsTracksTrackIdSecurity;
}
export declare class PostRepostsTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
