import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteRepostsPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class DeleteRepostsPlaylistsPlaylistIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud playlist id
     */
    playlistId: number;
}
export declare class DeleteRepostsPlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
