import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserEarningsSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class GetUserEarningsRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare class GetUserEarningsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Earnings for vendors
     */
    earnings?: shared.Earnings;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
