import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { MissedParticipationCountDetails } from "./missedparticipationcountdetails";
/**
 * Represents a result from querying for participation stats for an account.
 */
export declare class ParticipationResult extends SpeakeasyBase {
    /**
     * Key of a result.
     */
    key?: Key;
    /**
     * The total number of opportunities **not** eligible for the Google Ads auction process. Comprised of the following: * Landing page missing * Price missing * Price problem * Price unavailable * Other
     */
    missedParticipationCount?: string;
    /**
     * Missed participation count broken down by reason.
     */
    missedParticipationCountDetails?: MissedParticipationCountDetails;
    /**
     * For a specific hotel, the total number of opportunities that were available. Opportunities are the total number of instances when a hotel ad could have been displayed to a user.
     */
    opportunityCount?: string;
    /**
     * The total number of opportunities for which you were eligible to enter in the Google Ads auction process.
     */
    participationCount?: string;
    /**
     * The percentage rate of participation where the number of successfully participated opportunities is divided by the total number of opportunities. For example, if a property was eligible to enter the Google Ads auction 90 times out of 100 opportunities, the participation rate is 90%.
     */
    participationPercent?: number;
    /**
     * Partner's hotel display name. This field is only populated when the result is aggregated by `partnerHotelId`.
     */
    partnerHotelDisplayName?: string;
}
