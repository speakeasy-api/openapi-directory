import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsHomeservicesLocalservicesV1AggregatorInfo } from "./googleadshomeserviceslocalservicesv1aggregatorinfo";
/**
 * An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18
 */
export declare class GoogleAdsHomeservicesLocalservicesV1AccountReport extends SpeakeasyBase {
    /**
     * Unique identifier of the GLS account.
     */
    accountId?: string;
    /**
     * Conatiner for aggregator specific information if lead is for an aggregator GLS account.
     */
    aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;
    /**
     * Average review rating score from 1-5 stars.
     */
    averageFiveStarRating?: number;
    /**
     * Average weekly budget in the currency code of the account.
     */
    averageWeeklyBudget?: number;
    /**
     * Business name of the account.
     */
    businessName?: string;
    /**
     * Currency code of the account.
     */
    currencyCode?: string;
    /**
     * Number of charged leads the account received in current specified period.
     */
    currentPeriodChargedLeads?: string;
    /**
     * Number of connected phone calls (duration over 30s) in current specified period.
     */
    currentPeriodConnectedPhoneCalls?: string;
    /**
     * Number of phone calls in current specified period, including both connected and unconnected calls.
     */
    currentPeriodPhoneCalls?: string;
    /**
     * Total cost of the account in current specified period in the account's specified currency.
     */
    currentPeriodTotalCost?: number;
    /**
     * Number of impressions that customers have had in the past 2 days.
     */
    impressionsLastTwoDays?: string;
    /**
     * Phone lead responsiveness of the account for the past 90 days from current date. This is computed by taking the total number of connected calls from charged phone leads and dividing by the total number of calls received.
     */
    phoneLeadResponsiveness?: number;
    /**
     * Number of charged leads the account received in previous specified period.
     */
    previousPeriodChargedLeads?: string;
    /**
     * Number of connected phone calls (duration over 30s) in previous specified period.
     */
    previousPeriodConnectedPhoneCalls?: string;
    /**
     * Number of phone calls in previous specified period, including both connected and unconnected calls.
     */
    previousPeriodPhoneCalls?: string;
    /**
     * Total cost of the account in previous specified period in the account's specified currency.
     */
    previousPeriodTotalCost?: number;
    /**
     * Total number of reviews the account has up to current date.
     */
    totalReview?: number;
}
