import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Buy = '1', Sell = '2'
 */
export declare enum PostAccountsAccountOrdersRequestBodySideEnum {
    One = "1",
    Two = "2"
}
/**
 * Order Parameters
 */
export declare class PostAccountsAccountOrdersRequestBody extends SpeakeasyBase {
    /**
     * Required Price to support Stop and Stop Limit orders
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
     * By setting this bool to false the customer attests that the order is not subject to German HFT Act, was not generated using any automated algorithm, and no algorithm determined or changed financial instrument, side, quantity, order type, limit or other price, trading venue or timing of this order. Currently we cannot accept orders where this flag is set to true. Such orders will be rejected.
     */
    germanHftAlgo?: boolean;
    /**
     * The instrument type of the contract
     */
    instrumentType?: string;
    /**
     * The exchange on which the trading product is listed (only for InstrumentType=STK)
     */
    listingExchange?: string;
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
     * MultiValueString representing the restrictions associated with
     *
     * @remarks
     * an order. If more than one restriction is applicable to an
     * order, this field can contain multiple instructions separated
     * by space.
     * '1' Program Trade
     * '2' Index Arbitrage
     * '3' Non-Index Arbitrage
     *
     */
    orderRestrictions?: number;
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
    side?: PostAccountsAccountOrdersRequestBodySideEnum;
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
export declare class PostAccountsAccountOrdersRequest extends SpeakeasyBase {
    /**
     * Order Parameters
     */
    requestBody: PostAccountsAccountOrdersRequestBody;
    /**
     * Account Number
     */
    account: string;
}
export declare class PostAccountsAccountOrdersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns order status information
     */
    orderStates?: shared.OrderState[];
}
