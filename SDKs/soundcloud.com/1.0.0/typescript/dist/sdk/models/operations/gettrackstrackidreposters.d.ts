import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTracksTrackIdRepostersSecurity extends SpeakeasyBase {
    clientId: string;
}
export declare class GetTracksTrackIdRepostersRequest extends SpeakeasyBase {
    /**
     * Number of results to return in the collection.
     */
    limit?: number;
    /**
     * SoundCloud Track id
     */
    trackId: number;
}
export declare class GetTracksTrackIdRepostersResponse extends SpeakeasyBase {
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
