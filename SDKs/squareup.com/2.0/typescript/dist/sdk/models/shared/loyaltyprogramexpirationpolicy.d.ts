import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes when the loyalty program expires.
 */
export declare class LoyaltyProgramExpirationPolicy extends SpeakeasyBase {
    /**
     * The number of months before points expire, in `P[n]M` RFC 3339 duration format. For example, a value of `P12M` represents a duration of 12 months.
     *
     * @remarks
     * Points are valid through the last day of the month in which they are scheduled to expire. For example, with a  `P12M` duration, points earned on July 6, 2020 expire on August 1, 2021.
     */
    expirationDuration: string;
}
