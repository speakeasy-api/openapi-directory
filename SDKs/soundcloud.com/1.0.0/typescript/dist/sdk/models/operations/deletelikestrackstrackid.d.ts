import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLikesTracksTrackIdPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class DeleteLikesTracksTrackIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class DeleteLikesTracksTrackIdRequest extends SpeakeasyBase {
    pathParams: DeleteLikesTracksTrackIdPathParams;
    security: DeleteLikesTracksTrackIdSecurity;
}
export declare class DeleteLikesTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
