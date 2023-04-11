import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeletePlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class DeletePlaylistsPlaylistIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud playlist id
     */
    playlistId: number;
}
export declare class DeletePlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Found
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
