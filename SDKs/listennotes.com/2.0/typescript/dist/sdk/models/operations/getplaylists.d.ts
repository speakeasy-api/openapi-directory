import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * How do you want to sort playlists?
 *
 * @remarks
 *
 */
export declare enum GetPlaylistsSortEnum {
    RecentAddedFirst = "recent_added_first",
    OldestAddedFirst = "oldest_added_first",
    NameAToZ = "name_a_to_z",
    NameZToA = "name_z_to_a"
}
export declare class GetPlaylistsRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * Page number of playlists.
     *
     * @remarks
     *
     */
    page?: number;
    /**
     * How do you want to sort playlists?
     *
     * @remarks
     *
     */
    sort?: GetPlaylistsSortEnum;
}
export declare class GetPlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    playlistsResponse?: shared.PlaylistsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
