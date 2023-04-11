import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The legal reason for the current status of the subscription.
 */
export declare enum PublicSubscriptionStatusLegalBasisEnum {
    LegitimateInterestPql = "LEGITIMATE_INTEREST_PQL",
    LegitimateInterestClient = "LEGITIMATE_INTEREST_CLIENT",
    PerformanceOfContract = "PERFORMANCE_OF_CONTRACT",
    ConsentWithNotice = "CONSENT_WITH_NOTICE",
    NonGdpr = "NON_GDPR",
    ProcessAndStore = "PROCESS_AND_STORE",
    LegitimateInterestOther = "LEGITIMATE_INTEREST_OTHER"
}
/**
 * Where the status is determined from e.g. PORTAL_WIDE_STATUS if the contact opted out from the portal.
 */
export declare enum PublicSubscriptionStatusSourceOfStatusEnum {
    PortalWideStatus = "PORTAL_WIDE_STATUS",
    BrandWideStatus = "BRAND_WIDE_STATUS",
    SubscriptionStatus = "SUBSCRIPTION_STATUS"
}
/**
 * Whether the contact is subscribed.
 */
export declare enum PublicSubscriptionStatusStatusEnum {
    Subscribed = "SUBSCRIBED",
    NotSubscribed = "NOT_SUBSCRIBED"
}
/**
 * The status of a subscription for a contact.
 */
export declare class PublicSubscriptionStatus extends SpeakeasyBase {
    /**
     * The ID of the brand that the subscription is associated with, if there is one.
     */
    brandId?: number;
    /**
     * A description of the subscription.
     */
    description: string;
    /**
     * The ID for the subscription.
     */
    id: string;
    /**
     * The legal reason for the current status of the subscription.
     */
    legalBasis?: PublicSubscriptionStatusLegalBasisEnum;
    /**
     * A more detailed explanation to go with the legal basis.
     */
    legalBasisExplanation?: string;
    /**
     * The name of the subscription.
     */
    name: string;
    /**
     * The name of the preferences group that the subscription is associated with.
     */
    preferenceGroupName?: string;
    /**
     * Where the status is determined from e.g. PORTAL_WIDE_STATUS if the contact opted out from the portal.
     */
    sourceOfStatus: PublicSubscriptionStatusSourceOfStatusEnum;
    /**
     * Whether the contact is subscribed.
     */
    status: PublicSubscriptionStatusStatusEnum;
}
