import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional wallet transaction options
 */
export declare class WalletTransactionListRequestOptions extends SpeakeasyBase {
    /**
     * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DDThh:mm:ssZ) for filtering transactions, inclusive of the provided date.
     */
    endTime?: Date;
    /**
     * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DDThh:mm:ssZ) for filtering transactions, inclusive of the provided date.
     */
    startTime?: Date;
}
