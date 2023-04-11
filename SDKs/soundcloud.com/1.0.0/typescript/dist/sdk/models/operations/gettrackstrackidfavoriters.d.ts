import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTracksTrackIdFavoritersSecurity extends SpeakeasyBase {
    clientId: string;
}
export declare class GetTracksTrackIdFavoritersRequest extends SpeakeasyBase {
    /**
     * Number of results to return in the collection.
     */
    limit?: number;
    /**
     * Offset of first result. Deprecated, use `linked_partitioning` instead.
     */
    offset?: number;
    /**
     * SoundCloud Track id
     */
    trackId: number;
}
export declare class GetTracksTrackIdFavoritersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    usersList?: shared.UsersList[];
}
