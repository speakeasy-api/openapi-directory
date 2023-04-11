import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStatsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    /**
     * Client and vendor statistics for your account
     */
    stats?: shared.Stats;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
