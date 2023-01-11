import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeTracksTrackIdPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class GetMeTracksTrackIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeTracksTrackIdRequest extends SpeakeasyBase {
    pathParams: GetMeTracksTrackIdPathParams;
    security: GetMeTracksTrackIdSecurity;
}
export declare class GetMeTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    track?: shared.Track;
}
