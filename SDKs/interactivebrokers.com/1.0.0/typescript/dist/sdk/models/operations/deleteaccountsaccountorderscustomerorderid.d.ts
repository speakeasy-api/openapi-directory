import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteAccountsAccountOrdersCustomerOrderIdRequest extends SpeakeasyBase {
    /**
     * Customer Order ID
     */
    customerOrderId: string;
    /**
     * Account Number
     */
    account: string;
}
export declare enum DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJSONSideEnum {
    One = "1",
    Two = "2"
}
export declare class DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJSON extends SpeakeasyBase {
    customerOrderId?: string;
    orderQty?: number;
    /**
     * Market = '1'
     *
     * @remarks
     * Limit = '2'
     * Stop = '3'
     * StopLimit = '4'
     *
     */
    orderType?: shared.OrderTypeEnum;
    price?: string;
    side?: DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJSONSideEnum;
    /**
     * Status of the order
     *
     * @remarks
     * InvalidOrderStatus = '-1'
     * New = '0'
     * PartiallyFilled = '1'
     * Filled = '2'
     * DoneForTheDay = '3'
     * Canceled = '4'
     * Replaced = '5'
     * PendingCancelReplace = '6'
     * Stopped = '7'
     * Rejected = '8'
     * Suspended = '9'
     * PendingNew = 'A'
     * Calculated = 'B'
     * Expired = 'C'
     * AcceptedForBidding = 'D'
     * PendingReplace = 'E'
     *
     */
    status?: shared.OrderStatusEnum;
    symbol?: number;
    warning?: string;
}
export declare class DeleteAccountsAccountOrdersCustomerOrderIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns result of cancellation attempt
     */
    deleteAccountsAccountOrdersCustomerOrderId200ApplicationJSONObjects?: DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJSON[];
}
