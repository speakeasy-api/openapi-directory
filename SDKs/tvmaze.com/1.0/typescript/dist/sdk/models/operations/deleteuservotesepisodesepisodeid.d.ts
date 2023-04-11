import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserVotesEpisodesEpisodeIdRequest extends SpeakeasyBase {
    episodeId: number;
}
export declare class DeleteUserVotesEpisodesEpisodeIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
