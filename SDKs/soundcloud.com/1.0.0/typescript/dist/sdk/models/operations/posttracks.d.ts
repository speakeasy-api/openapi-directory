import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTracksRequests extends SpeakeasyBase {
    trackDataRequest?: shared.TrackDataRequest;
    trackDataRequest1?: shared.TrackDataRequest;
}
export declare class PostTracksSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class PostTracksRequest extends SpeakeasyBase {
    request?: PostTracksRequests;
    security: PostTracksSecurity;
}
export declare class PostTracksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    track?: shared.Track;
}
