import { SpeakeasyBase } from "../../../internal/utils";
/**
 * WebSocket Call
 */
export declare class CsvWebsockets extends SpeakeasyBase {
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * UUID of the request.
     */
    callId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * Date of the end of the call.
     */
    dateEnd?: Date;
    /**
     * Date of the start of the call.
     */
    dateStart?: Date;
    /**
     * Duration of the call in seconds.
     */
    duration?: number;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Search only for WebSocket call with corresponding status.
     */
    status?: string;
    /**
     * Total price of the request.
     */
    totalPrice?: number;
}
