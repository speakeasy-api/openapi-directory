import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRepostsPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class PostRepostsPlaylistsPlaylistIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud playlist id
     */
    playlistId: number;
}
export declare class PostRepostsPlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
