import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Buy = '1', Sell = '2'
 */
export declare enum PostAccountsAccountOrderImpactRequestBodySideEnum {
    One = "1",
    Two = "2"
}
/**
 * Order Parameters
 */
export declare class PostAccountsAccountOrderImpactRequestBody extends SpeakeasyBase {
    /**
     * Required price to support Stop and Stop Limit orders
     */
    auxPrice?: number;
    /**
     * The internal IB identifier for the trading product specified as an integer (can be obtained in response to /secdef request)
     */
    contractId?: number;
    /**
     * The currency in which the FX pair trades (only for InstrumentType=CASH)
     */
    currency?: string;
    /**
     * The order ID assigned by the customer.
     */
    customerOrderId?: string;
    /**
     * The instrument type of the contract
     */
    instrumentType?: string;
    /**
     * The exchange on which the trading product is listed (only for InstrumentType=STK)
     */
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
    orderType?: shared.OrderTypeEnum;
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
    side?: PostAccountsAccountOrderImpactRequestBodySideEnum;
    /**
     * The symbol that identifies the trading product
     */
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
    timeInForce?: shared.TimeInForceEnum;
}
export declare class PostAccountsAccountOrderImpactRequest extends SpeakeasyBase {
    /**
     * Order Parameters
     */
    requestBody: PostAccountsAccountOrderImpactRequestBody;
    /**
     * Account Number
     */
    account: string;
}
/**
 * Order impact info
 */
export declare class PostAccountsAccountOrderImpact200ApplicationJSON extends SpeakeasyBase {
    commission?: number;
    commissionsCurrency?: string;
    equityWithLoan?: number;
    initMargin?: number;
    initMarginBefore?: number;
    maintMargin?: number;
    maintMarginBefore?: number;
    marginCurrency?: string;
    maxCommissions?: number;
    minCommissions?: number;
}
export declare class PostAccountsAccountOrderImpactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Order impact info
     */
    postAccountsAccountOrderImpact200ApplicationJSONObject?: PostAccountsAccountOrderImpact200ApplicationJSON;
}
