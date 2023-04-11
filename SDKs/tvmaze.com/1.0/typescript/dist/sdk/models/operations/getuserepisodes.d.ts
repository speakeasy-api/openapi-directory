import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserEpisodesRequest extends SpeakeasyBase {
    /**
     * Only return episodes from this specific show
     */
    showId?: number;
}
export declare class GetUserEpisodesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of marked episodes
     */
    markedEpisodes?: shared.MarkedEpisode[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
