import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlaylistsPlaylistIdRepostersSecurity extends SpeakeasyBase {
    clientId: string;
}
export declare class GetPlaylistsPlaylistIdRepostersRequest extends SpeakeasyBase {
    /**
     * Number of results to return in the collection.
     */
    limit?: number;
    /**
     * SoundCloud playlist id
     */
    playlistId: number;
}
export declare class GetPlaylistsPlaylistIdRepostersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    metaUsers?: shared.MetaUsers;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
