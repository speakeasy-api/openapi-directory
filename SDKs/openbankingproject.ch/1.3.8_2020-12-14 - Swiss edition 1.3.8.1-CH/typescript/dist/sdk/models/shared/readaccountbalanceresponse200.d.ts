import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16CH } from "./accountreference16ch";
import { Balance } from "./balance";
/**
 * Body of the response for a successful read balance for an account request.
 */
export declare class ReadAccountBalanceResponse200 extends SpeakeasyBase {
    /**
     * Reference to an account by either
     *
     * @remarks
     *   * IBAN, of a payment accounts, or
     *   * otherAccountIdentification, for payment accounts if there is no IBAN
     * adapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy
     *
     */
    account?: AccountReference16CH;
    /**
     * A list of balances regarding this account, e.g. the current balance, the last booked balance.
     *
     * @remarks
     * The list might be restricted to the current balance.
     *
     */
    balances: Balance[];
}
