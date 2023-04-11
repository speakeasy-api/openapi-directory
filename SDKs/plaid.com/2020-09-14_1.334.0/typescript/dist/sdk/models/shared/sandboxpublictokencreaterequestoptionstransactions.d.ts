import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional set of parameters corresponding to transactions options.
 */
export declare class SandboxPublicTokenCreateRequestOptionsTransactions extends SpeakeasyBase {
    /**
     * The most recent date for which to fetch transaction history. Dates should be formatted as YYYY-MM-DD.
     */
    endDate?: Date;
    /**
     * The earliest date for which to fetch transaction history. Dates should be formatted as YYYY-MM-DD.
     */
    startDate?: Date;
}
