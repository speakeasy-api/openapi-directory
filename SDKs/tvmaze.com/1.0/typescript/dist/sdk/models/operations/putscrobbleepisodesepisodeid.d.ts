import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutScrobbleEpisodesEpisodeIdRequest extends SpeakeasyBase {
    markedEpisodeInput?: shared.MarkedEpisodeInput;
    episodeId: number;
}
export declare class PutScrobbleEpisodesEpisodeIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * this episode is now marked
     */
    markedEpisode?: shared.MarkedEpisode;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
