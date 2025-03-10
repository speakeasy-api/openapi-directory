import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16CH } from "./accountreference16ch";
import { AccountReport } from "./accountreport";
import { Balance } from "./balance";
import { HrefType } from "./hreftype";
/**
 * Body of the JSON response for a successful read transaction list request.
 *
 * @remarks
 * This account report contains transactions resulting from the query parameters.
 *
 */
export declare class TransactionsResponse200Json extends SpeakeasyBase {
    /**
     * A list of hyperlinks to be recognised by the TPP.
     *
     * @remarks
     *
     * Type of links admitted in this response:
     *   - "download": a link to a resource, where the transaction report might be downloaded from in
     *   case where transaction reports have a huge size.
     *
     * Remark: This feature shall only be used where camt-data is requested which has a huge size.
     *
     */
    links?: Record<string, HrefType>;
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
    balances?: Balance[];
    /**
     * JSON based account report.
     *
     * @remarks
     * This account report contains transactions resulting from the query parameters.
     *
     * 'booked' shall be contained if bookingStatus parameter is set to "booked" or "both".
     *
     * 'pending' is not contained if the bookingStatus parameter is set to "booked" or "information".
     *
     * 'information' Only contained if the bookingStatus is set to "information" and if supported by ASPSP.
     *
     */
    transactions?: AccountReport;
}
