import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 *  Settlement reports detail order-level and item-level credits and debits between you and Google.
 */
export declare class SettlementReport extends SpeakeasyBase {
    /**
     * The end date on which all transactions are included in the report, in ISO 8601 format.
     */
    endDate?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#settlementReport`"
     */
    kind?: string;
    previousBalance?: Price;
    /**
     * The ID of the settlement report.
     */
    settlementId?: string;
    /**
     * The start date on which all transactions are included in the report, in ISO 8601 format.
     */
    startDate?: string;
    transferAmount?: Price;
    /**
     * Date on which transfer for this payment was initiated by Google, in ISO 8601 format.
     */
    transferDate?: string;
    /**
     * The list of bank identifiers used for the transfer. For example, Trace ID for Federal Automated Clearing House (ACH). This may also be known as the Wire ID.
     */
    transferIds?: string[];
}
