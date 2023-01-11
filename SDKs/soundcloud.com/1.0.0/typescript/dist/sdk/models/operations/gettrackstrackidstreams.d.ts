import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTracksTrackIdStreamsPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class GetTracksTrackIdStreamsQueryParams extends SpeakeasyBase {
    secretToken?: string;
}
export declare class GetTracksTrackIdStreamsSecurity extends SpeakeasyBase {
    clientId: shared.SchemeClientId;
}
export declare class GetTracksTrackIdStreamsRequest extends SpeakeasyBase {
    pathParams: GetTracksTrackIdStreamsPathParams;
    queryParams: GetTracksTrackIdStreamsQueryParams;
    security: GetTracksTrackIdStreamsSecurity;
}
export declare class GetTracksTrackIdStreamsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    streams?: shared.Streams;
}
