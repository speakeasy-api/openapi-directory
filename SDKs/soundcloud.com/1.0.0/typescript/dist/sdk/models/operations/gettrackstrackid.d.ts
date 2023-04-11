import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTracksTrackIdSecurity extends SpeakeasyBase {
    clientId: string;
}
export declare class GetTracksTrackIdRequest extends SpeakeasyBase {
    /**
     * A secret token to fetch private playlists/tracks
     */
    secretToken?: string;
    /**
     * SoundCloud Track id
     */
    trackId: number;
}
export declare class GetTracksTrackIdResponse extends SpeakeasyBase {
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
    track?: shared.Track;
}
