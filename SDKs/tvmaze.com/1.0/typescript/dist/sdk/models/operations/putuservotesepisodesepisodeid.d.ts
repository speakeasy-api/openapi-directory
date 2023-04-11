import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUserVotesEpisodesEpisodeIdRequest extends SpeakeasyBase {
    episodeVoteInput?: shared.EpisodeVoteInput;
    episodeId: number;
}
export declare class PutUserVotesEpisodesEpisodeIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This episode is now voted for
     */
    episodeVote?: shared.EpisodeVote;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
