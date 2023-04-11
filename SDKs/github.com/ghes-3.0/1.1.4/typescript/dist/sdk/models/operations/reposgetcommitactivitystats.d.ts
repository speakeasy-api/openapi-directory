import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetCommitActivityStatsRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetCommitActivityStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    commitActivities?: shared.CommitActivity[];
    /**
     * Accepted
     */
    reposGetCommitActivityStats202ApplicationJSONObject?: Record<string, any>;
}
