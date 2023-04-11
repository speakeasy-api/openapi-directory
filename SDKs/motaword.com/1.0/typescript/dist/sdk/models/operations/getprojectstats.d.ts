import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectStatsResponse extends SpeakeasyBase {
    /**
     * Project statistics for your account
     */
    clientProjectStats?: shared.ClientProjectStats;
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
