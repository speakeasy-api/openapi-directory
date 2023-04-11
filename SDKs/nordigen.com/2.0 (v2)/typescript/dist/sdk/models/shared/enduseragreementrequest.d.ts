import { SpeakeasyBase } from "../../../internal/utils";
/**
 * EndUserAgreement.
 */
export declare class EndUserAgreementRequest extends SpeakeasyBase {
    /**
     * Array containing one or several values of ['balances', 'details', 'transactions']
     */
    accessScope?: any[][];
    /**
     * Number of days from acceptance that the access can be used.
     */
    accessValidForDays?: number;
    /**
     * an Institution ID for this EUA
     */
    institutionId: string;
    /**
     * Maximum number of days of transaction data to retrieve.
     */
    maxHistoricalDays?: number;
}
