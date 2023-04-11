import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserStatsSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class GetUserStatsRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare class GetUserStatsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    /**
     * User stats for client and vendors
     */
    stats?: shared.Stats;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
