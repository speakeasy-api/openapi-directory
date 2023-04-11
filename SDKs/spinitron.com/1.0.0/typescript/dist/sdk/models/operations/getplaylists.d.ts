import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlaylistsRequest extends SpeakeasyBase {
    /**
     * Amount of items to return
     */
    count?: number;
    /**
     * The ending datetime. Maximum 1 hour in future.
     *
     * @remarks
     *
     */
    end?: Date;
    /**
     * Allows to select extra fields
     */
    expand?: string[];
    /**
     * Allows to select only needed fields
     */
    fields?: string[];
    /**
     * Offset, used together with count
     */
    page?: number;
    /**
     * Filter by persona
     */
    personaId?: number;
    /**
     * Filter by show
     */
    showId?: number;
    /**
     * The datetime starting from items must be returned. Maximum 1 hour in future.
     *
     * @remarks
     *
     */
    start?: Date;
}
export declare class GetPlaylists200ApplicationXMLLinks extends SpeakeasyBase {
    self?: shared.Link;
}
/**
 * The playlists
 */
export declare class GetPlaylists200ApplicationXML extends SpeakeasyBase {
    links?: GetPlaylists200ApplicationXMLLinks;
    meta?: shared.Pagination;
    items?: shared.Playlist[];
}
export declare class GetPlaylists200ApplicationJSONLinks extends SpeakeasyBase {
    self?: shared.Link;
}
/**
 * The playlists
 */
export declare class GetPlaylists200ApplicationJSON extends SpeakeasyBase {
    links?: GetPlaylists200ApplicationJSONLinks;
    meta?: shared.Pagination;
    items?: shared.Playlist[];
}
export declare class GetPlaylistsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The playlists
     */
    getPlaylists200ApplicationJSONObject?: GetPlaylists200ApplicationJSON;
}
