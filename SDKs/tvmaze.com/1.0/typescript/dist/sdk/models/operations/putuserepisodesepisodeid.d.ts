import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUserEpisodesEpisodeIdRequest extends SpeakeasyBase {
    markedEpisodeInput?: shared.MarkedEpisodeInput;
    episodeId: number;
}
export declare class PutUserEpisodesEpisodeIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * this episode is now marked
     */
    markedEpisode?: shared.MarkedEpisode;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
