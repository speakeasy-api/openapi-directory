import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTracksTrackIdPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class GetTracksTrackIdQueryParams extends SpeakeasyBase {
    secretToken?: string;
}
export declare class GetTracksTrackIdSecurity extends SpeakeasyBase {
    clientId: shared.SchemeClientId;
}
export declare class GetTracksTrackIdRequest extends SpeakeasyBase {
    pathParams: GetTracksTrackIdPathParams;
    queryParams: GetTracksTrackIdQueryParams;
    security: GetTracksTrackIdSecurity;
}
export declare class GetTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    track?: shared.Track;
}
