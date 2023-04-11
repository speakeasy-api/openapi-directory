import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTracksTrackIdStreamsSecurity extends SpeakeasyBase {
    clientId: string;
}
export declare class GetTracksTrackIdStreamsRequest extends SpeakeasyBase {
    /**
     * A secret token to fetch private playlists/tracks
     */
    secretToken?: string;
    /**
     * SoundCloud Track id
     */
    trackId: number;
}
export declare class GetTracksTrackIdStreamsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    streams?: shared.Streams;
}
