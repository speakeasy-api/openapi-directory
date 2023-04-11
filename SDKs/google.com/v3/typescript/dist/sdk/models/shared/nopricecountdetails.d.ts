import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reasons that contributed to the no price count and the total count for each reason.
 */
export declare class NoPriceCountDetails extends SpeakeasyBase {
    /**
     * The total number of missed participation due to live pricing not being triggered for any of the following reasons: * You didn't have live pricing configured for these searches. * You restricted Google from accessing the hotel itinerary in question.
     */
    livePricingConfigIssueCount?: string;
    /**
     * The total number of missed participation due to live pricing being unavailable. Live pricing will not be triggered for certain default itineraries or UIs. In this scenario, partners will need a cached price to participate.
     */
    livePricingNotAvailableCount?: string;
    /**
     * The total number of missed participation due to live pricing not being triggered for any of the following reasons: * You didn't set a bid. * You didn't have a valid landing page. * There weren't enough prices in the cache.
     */
    livePricingNotTriggeredCount?: string;
    /**
     * The number of missed participations due to other issues with live pricing.
     */
    livePricingOtherReasonCount?: string;
    /**
     * The total number of missed participation due to technical issues with live pricing for any of the following reasons: * You didn’t respond quickly enough and exceeded the response deadline (around 4000 milliseconds). * You returned an error. * Your response was malformed.
     */
    livePricingTechnicalIssueCount?: string;
}
