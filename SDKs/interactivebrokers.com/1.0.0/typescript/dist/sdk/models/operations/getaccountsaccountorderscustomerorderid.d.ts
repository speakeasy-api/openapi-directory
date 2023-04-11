import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountsAccountOrdersCustomerOrderIdRequest extends SpeakeasyBase {
    /**
     * Customer Order ID
     */
    customerOrderId: string;
    /**
     * Account Number
     */
    account: string;
}
export declare class GetAccountsAccountOrdersCustomerOrderIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns order status information
     */
    orderStates?: shared.OrderState[];
}
