import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountsAccountOrdersRequest extends SpeakeasyBase {
    /**
     * Account Number
     */
    account: string;
}
export declare class GetAccountsAccountOrdersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns a list of orders for the indicated account
     */
    orderStates?: shared.OrderState[];
}
