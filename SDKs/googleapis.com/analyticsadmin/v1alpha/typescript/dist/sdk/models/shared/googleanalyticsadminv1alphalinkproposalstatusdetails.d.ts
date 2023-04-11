import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The source of this proposal.
 */
export declare enum GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum {
    LinkProposalInitiatingProductUnspecified = "LINK_PROPOSAL_INITIATING_PRODUCT_UNSPECIFIED",
    GoogleAnalytics = "GOOGLE_ANALYTICS",
    LinkedProduct = "LINKED_PRODUCT"
}
/**
 * Output only. The state of this proposal.
 */
export declare enum GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum {
    LinkProposalStateUnspecified = "LINK_PROPOSAL_STATE_UNSPECIFIED",
    AwaitingReviewFromGoogleAnalytics = "AWAITING_REVIEW_FROM_GOOGLE_ANALYTICS",
    AwaitingReviewFromLinkedProduct = "AWAITING_REVIEW_FROM_LINKED_PRODUCT",
    Withdrawn = "WITHDRAWN",
    Declined = "DECLINED",
    Expired = "EXPIRED",
    Obsolete = "OBSOLETE"
}
/**
 * Status information for a link proposal.
 */
export declare class GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails extends SpeakeasyBase {
    /**
     * Output only. The source of this proposal.
     */
    linkProposalInitiatingProduct?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum;
    /**
     * Output only. The state of this proposal.
     */
    linkProposalState?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum;
    /**
     * Output only. The email address of the user that proposed this linkage.
     */
    requestorEmail?: string;
}
