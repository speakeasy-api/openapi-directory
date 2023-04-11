import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Buy = '1', Sell = '2'
 */
export declare enum PutAccountsAccountOrdersCustomerOrderIdRequestBodySideEnum {
    One = "1",
    Two = "2"
}
/**
 * Order Parameters
 */
export declare class PutAccountsAccountOrdersCustomerOrderIdRequestBody extends SpeakeasyBase {
    /**
     * Required Price to support Stop and Stop Limit orders
     */
    auxPrice?: number;
    /**
     * The new order ID assigned by the customer for the modification.
     */
    customerOrderId?: string;
    /**
     * By setting this bool to false the customer attests that the order is not subject to German HFT Act, was not generated using any automated algorithm, and no algorithm determined or changed financial instrument, side, quantity, order type, limit or other price, trading venue or timing of this order. Currently we cannot accept orders where this flag is set to true. Such orders will be rejected.
     */
    germanHftAlgo?: boolean;
    /**
     * This field permits specification of the user's preregistered (via account management) MiFID II short code for algos that are responsible for investment decisions
     */
    mifid2Algo?: string;
    /**
     * This field permits specification of the user's preregistered (via account management) MiFID II short code for decision makers.
     */
    mifid2DecisionMaker?: string;
    /**
     * This field permits specification of the user's preregistered (via account management) MiFID II short code for algos that are responsible for handling/routing of the order.
     */
    mifid2ExecutionAlgo?: string;
    /**
     * This field permits specification of the user's preregistered (via account management) MiFID II person responsible for handling/routing of the order
     */
    mifid2ExecutionTrader?: string;
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
    /**
     * The order ID assigned by the customer
     */
    origCustomerOrderId?: string;
    /**
     * Indicates if order is active outside regular trading hours, where defined. 0 = no (default), 1 = yes
     */
    outsideRTH?: number;
    /**
     * The order price
     */
    price?: number;
    /**
     * The number of units in the order; contracts or shares
     */
    quantity?: number;
    /**
     * Buy = '1', Sell = '2'
     */
    side?: PutAccountsAccountOrdersCustomerOrderIdRequestBodySideEnum;
    /**
     * Defines order's active lifetime.
     *
     * @remarks
     * Day = '0'
     * GTC (Good till Cancel) = '1'
     * IOC (Immediate or Cancel) = '3'
     * Open = '2'
     * Close = '7'
     *
     */
    timeInForce?: shared.TimeInForceEnum;
}
export declare class PutAccountsAccountOrdersCustomerOrderIdRequest extends SpeakeasyBase {
    /**
     * Customer Order ID
     */
    customerOrderId: string;
    /**
     * Order Parameters
     */
    requestBody: PutAccountsAccountOrdersCustomerOrderIdRequestBody;
    /**
     * Account Number
     */
    account: string;
}
export declare enum PutAccountsAccountOrdersCustomerOrderId200ApplicationJSONSideEnum {
    One = "1",
    Two = "2"
}
export declare class PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON extends SpeakeasyBase {
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
    side?: PutAccountsAccountOrdersCustomerOrderId200ApplicationJSONSideEnum;
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
export declare class PutAccountsAccountOrdersCustomerOrderIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Result of order modification attempt
     */
    putAccountsAccountOrdersCustomerOrderId200ApplicationJSONObjects?: PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON[];
}
