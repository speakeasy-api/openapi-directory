import { SpeakeasyBase } from "../../../internal/utils";
import { OrderStatusEnum } from "./orderstatusenum";
import { OrderTypeEnum } from "./ordertypeenum";
import { TimeInForceEnum } from "./timeinforceenum";
export declare enum OrderStateSideEnum {
    One = "1",
    Two = "2"
}
/**
 * An object containing all the properties defining an order
 */
export declare class OrderState extends SpeakeasyBase {
    contractId?: number;
    customerOrderId?: number;
    filledQuantity?: number;
    listingExchange?: string;
    /**
     * Market = '1'
     *
     * @remarks
     * Limit = '2'
     * Stop = '3'
     * StopLimit = '4'
     *
     */
    orderType?: OrderTypeEnum;
    outsideRTH?: string;
    price?: number;
    remainingQuantity?: number;
    side?: OrderStateSideEnum;
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
    status?: OrderStatusEnum;
    ticker?: string;
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
    timeInForce?: TimeInForceEnum;
    transactionTime?: string;
    warning?: string;
}
