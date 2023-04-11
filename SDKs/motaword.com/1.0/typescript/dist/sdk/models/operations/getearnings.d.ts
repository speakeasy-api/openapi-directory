import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEarningsResponse extends SpeakeasyBase {
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
