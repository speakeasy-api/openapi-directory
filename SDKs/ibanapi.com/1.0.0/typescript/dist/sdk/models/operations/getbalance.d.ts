import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBalanceResponse extends SpeakeasyBase {
    /**
     * Your balance is exhausted or bad request
     */
    fourHundred?: shared.FourHundred;
    /**
     * Package expired or account was blocked
     */
    fourHundredAndOne?: shared.FourHundredAndOne;
    /**
     * Invalid API Key
     */
    fourHundredAndThree?: shared.FourHundredAndThree;
    /**
     * API key is missing
     */
    fourHundredAndTwentyTwo?: shared.FourHundredAndTwentyTwo;
    /**
     * SUCCESS
     */
    balanceResponse?: shared.BalanceResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
