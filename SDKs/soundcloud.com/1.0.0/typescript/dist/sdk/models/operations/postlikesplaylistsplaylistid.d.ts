import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostLikesPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class PostLikesPlaylistsPlaylistIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud playlist id
     */
    playlistId: number;
}
export declare class PostLikesPlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Too Many Requests
     */
    tooManyRequests?: shared.TooManyRequests;
}
