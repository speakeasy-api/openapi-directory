import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserEpisodesEpisodeIdRequest extends SpeakeasyBase {
    episodeId: number;
}
export declare class GetUserEpisodesEpisodeIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The marked episode
     */
    markedEpisode?: shared.MarkedEpisode;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
