import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserVotesEpisodesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of episode votes
     */
    episodeVotes?: shared.EpisodeVote[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
