import { SpeakeasyBase } from "../../../internal/utils";
/**
 * EndUserAgreement.
 */
export declare class EndUserAgreement extends SpeakeasyBase {
    /**
     * The date & time at which the end user accepted the agreement.
     */
    accepted?: Date;
    /**
     * Array containing one or several values of ['balances', 'details', 'transactions']
     */
    accessScope?: any[][];
    /**
     * Number of days from acceptance that the access can be used.
     */
    accessValidForDays?: number;
    /**
     * The date & time at which the end user agreement was created.
     */
    created?: Date;
    /**
     * The ID of this End User Agreement, used to refer to this end user agreement in other API calls.
     */
    id?: string;
    /**
     * an Institution ID for this EUA
     */
    institutionId: string;
    /**
     * Maximum number of days of transaction data to retrieve.
     */
    maxHistoricalDays?: number;
}
