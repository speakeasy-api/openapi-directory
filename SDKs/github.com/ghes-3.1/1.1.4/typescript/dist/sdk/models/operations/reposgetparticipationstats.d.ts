import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetParticipationStatsRequest extends SpeakeasyBase {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposGetParticipationStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * The array order is oldest week (index 0) to most recent week.
     */
    participationStats?: shared.ParticipationStats;
}
