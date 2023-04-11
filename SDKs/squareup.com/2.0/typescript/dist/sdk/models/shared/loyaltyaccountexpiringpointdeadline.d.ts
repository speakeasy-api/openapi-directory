import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a set of points for a loyalty account that are scheduled to expire on a specific date.
 */
export declare class LoyaltyAccountExpiringPointDeadline extends SpeakeasyBase {
    /**
     * The timestamp of when the points are scheduled to expire, in RFC 3339 format.
     */
    expiresAt: string;
    /**
     * The number of points scheduled to expire at the `expires_at` timestamp.
     */
    points: number;
}
