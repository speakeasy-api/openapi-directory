import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepostsTracksTrackIdPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class DeleteRepostsTracksTrackIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class DeleteRepostsTracksTrackIdRequest extends SpeakeasyBase {
    pathParams: DeleteRepostsTracksTrackIdPathParams;
    security: DeleteRepostsTracksTrackIdSecurity;
}
export declare class DeleteRepostsTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
