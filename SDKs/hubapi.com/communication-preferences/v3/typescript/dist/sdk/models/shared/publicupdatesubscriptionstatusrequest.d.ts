import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Legal basis for updating the contact's status (required for GDPR enabled portals).
 */
export declare enum PublicUpdateSubscriptionStatusRequestLegalBasisEnum {
    LegitimateInterestPql = "LEGITIMATE_INTEREST_PQL",
    LegitimateInterestClient = "LEGITIMATE_INTEREST_CLIENT",
    PerformanceOfContract = "PERFORMANCE_OF_CONTRACT",
    ConsentWithNotice = "CONSENT_WITH_NOTICE",
    NonGdpr = "NON_GDPR",
    ProcessAndStore = "PROCESS_AND_STORE",
    LegitimateInterestOther = "LEGITIMATE_INTEREST_OTHER"
}
/**
 * A request to change the status of a contact's subscription.
 */
export declare class PublicUpdateSubscriptionStatusRequest extends SpeakeasyBase {
    /**
     * Contact's email address.
     */
    emailAddress: string;
    /**
     * Legal basis for updating the contact's status (required for GDPR enabled portals).
     */
    legalBasis?: PublicUpdateSubscriptionStatusRequestLegalBasisEnum;
    /**
     * A more detailed explanation to go with the legal basis (required for GDPR enabled portals).
     */
    legalBasisExplanation?: string;
    /**
     * ID of the subscription being updated for the contact.
     */
    subscriptionId: string;
}
