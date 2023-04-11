import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserEpisodesEpisodeIdRequest extends SpeakeasyBase {
    episodeId: number;
}
export declare class DeleteUserEpisodesEpisodeIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
