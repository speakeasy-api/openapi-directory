import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlaylistsPlaylistIdTracksSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class GetPlaylistsPlaylistIdTracksRequest extends SpeakeasyBase {
    /**
     * Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
     *
     * @remarks
     *
     */
    access?: shared.AccessEnum[];
    /**
     * Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
     */
    linkedPartitioning?: boolean;
    /**
     * SoundCloud playlist id
     */
    playlistId: number;
    /**
     * A secret token to fetch private playlists/tracks
     */
    secretToken?: string;
}
export declare class GetPlaylistsPlaylistIdTracksResponse extends SpeakeasyBase {
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
    getPlaylistsPlaylistIdTracks200ApplicationJSONOneOf?: any;
}
