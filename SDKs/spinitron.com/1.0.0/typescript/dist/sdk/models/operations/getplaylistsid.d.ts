import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlaylistsIdRequest extends SpeakeasyBase {
    /**
     * Allows to select extra fields
     */
    expand?: string[];
    /**
     * Allows to select only needed fields
     */
    fields?: string[];
    id: number;
}
export declare class GetPlaylistsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Playlist not found or is in the future
     */
    error?: shared.ErrorT;
    /**
     * The playlist
     */
    playlist?: shared.Playlist;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
