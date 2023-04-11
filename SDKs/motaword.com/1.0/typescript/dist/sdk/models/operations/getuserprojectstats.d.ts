import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserProjectStatsSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class GetUserProjectStatsRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare class GetUserProjectStatsResponse extends SpeakeasyBase {
    /**
     * User stats for client and vendors
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
