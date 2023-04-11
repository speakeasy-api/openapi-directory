import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReposGetPunchCardStatsRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetPunchCardStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
     */
    codeFrequencyStats?: number[][];
}
