import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStringStatsResponse extends SpeakeasyBase {
    /**
     * Translation statistics for your account
     */
    clientStringStats?: shared.ClientStringStats;
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
