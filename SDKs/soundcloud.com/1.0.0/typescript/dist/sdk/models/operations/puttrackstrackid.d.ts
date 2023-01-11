import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTracksTrackIdPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class PutTracksTrackIdRequests extends SpeakeasyBase {
    trackDataRequest?: shared.TrackDataRequest;
    trackDataRequest1?: shared.TrackDataRequest;
    trackMetadataRequest?: shared.TrackMetadataRequest;
}
export declare class PutTracksTrackIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class PutTracksTrackIdRequest extends SpeakeasyBase {
    pathParams: PutTracksTrackIdPathParams;
    request?: PutTracksTrackIdRequests;
    security: PutTracksTrackIdSecurity;
}
export declare class PutTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    track?: shared.Track;
}
