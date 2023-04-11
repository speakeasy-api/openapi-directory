import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTracksTrackIdJsonSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class PutTracksTrackIdJsonRequest extends SpeakeasyBase {
    /**
     * Track payload
     */
    trackMetadataRequest?: shared.TrackMetadataRequest;
    /**
     * SoundCloud Track id
     */
    trackId: number;
}
export declare class PutTracksTrackIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    track?: shared.Track;
}
