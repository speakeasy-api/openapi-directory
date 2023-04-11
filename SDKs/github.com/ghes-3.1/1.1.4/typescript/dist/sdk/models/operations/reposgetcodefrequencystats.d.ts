import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReposGetCodeFrequencyStatsRequest extends SpeakeasyBase {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposGetCodeFrequencyStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
     */
    codeFrequencyStats?: number[][];
    /**
     * Accepted
     */
    reposGetCodeFrequencyStats202ApplicationJSONObject?: Record<string, any>;
}
