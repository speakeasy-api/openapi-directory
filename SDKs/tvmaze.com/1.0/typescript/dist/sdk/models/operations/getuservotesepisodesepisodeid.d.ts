import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserVotesEpisodesEpisodeIdRequest extends SpeakeasyBase {
    episodeId: number;
}
export declare class GetUserVotesEpisodesEpisodeIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The episode vote
     */
    episodeVote?: shared.EpisodeVote;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
