import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMePlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class GetMePlaylistsPlaylistIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud playlist id
     */
    playlistId: number;
}
export declare class GetMePlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    playlist?: shared.Playlist;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
