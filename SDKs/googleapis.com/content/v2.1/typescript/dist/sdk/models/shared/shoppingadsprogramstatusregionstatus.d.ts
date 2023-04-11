import { SpeakeasyBase } from "../../../internal/utils";
import { ShoppingAdsProgramStatusReviewIneligibilityReasonDetails } from "./shoppingadsprogramstatusreviewineligibilityreasondetails";
/**
 * Eligibility status of the Shopping Ads program.
 */
export declare enum ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Approved = "APPROVED",
    Disapproved = "DISAPPROVED",
    Warning = "WARNING",
    UnderReview = "UNDER_REVIEW",
    PendingReview = "PENDING_REVIEW",
    Onboarding = "ONBOARDING"
}
/**
 * If a program is eligible for review in a specific region. Only visible if `eligibilityStatus` is `DISAPPROVED`.
 */
export declare enum ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum {
    ReviewEligibilityUnspecified = "REVIEW_ELIGIBILITY_UNSPECIFIED",
    Eligible = "ELIGIBLE",
    Ineligible = "INELIGIBLE"
}
/**
 * Review ineligibility reason if account is not eligible for review.
 */
export declare enum ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum {
    ReviewIneligibilityReasonUnspecified = "REVIEW_INELIGIBILITY_REASON_UNSPECIFIED",
    OnboardingIssues = "ONBOARDING_ISSUES",
    NotEnoughOffers = "NOT_ENOUGH_OFFERS",
    InCooldownPeriod = "IN_COOLDOWN_PERIOD",
    AlreadyUnderReview = "ALREADY_UNDER_REVIEW",
    NoReviewRequired = "NO_REVIEW_REQUIRED",
    WillBeReviewedAutomatically = "WILL_BE_REVIEWED_AUTOMATICALLY",
    IsRetired = "IS_RETIRED",
    AlreadyReviewed = "ALREADY_REVIEWED"
}
/**
 * Status of program and region.
 */
export declare class ShoppingAdsProgramStatusRegionStatus extends SpeakeasyBase {
    /**
     * Date by which eligibilityStatus will go from `WARNING` to `DISAPPROVED`. Only visible when your eligibilityStatus is WARNING. In [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DD`.
     */
    disapprovalDate?: string;
    /**
     * Eligibility status of the Shopping Ads program.
     */
    eligibilityStatus?: ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum;
    /**
     * Issues that must be fixed to be eligible for review.
     */
    onboardingIssues?: string[];
    /**
     * The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes for all the regions with the same `eligibilityStatus` and `reviewEligibility`.
     */
    regionCodes?: string[];
    /**
     * If a program is eligible for review in a specific region. Only visible if `eligibilityStatus` is `DISAPPROVED`.
     */
    reviewEligibilityStatus?: ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum;
    /**
     * Review ineligibility reason if account is not eligible for review.
     */
    reviewIneligibilityReason?: ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum;
    /**
     * Reason a program in a specific region isn’t eligible for review. Only visible if `reviewEligibilityStatus` is `INELIGIBLE`.
     */
    reviewIneligibilityReasonDescription?: string;
    /**
     * Additional details for review ineligibility reasons.
     */
    reviewIneligibilityReasonDetails?: ShoppingAdsProgramStatusReviewIneligibilityReasonDetails;
    /**
     * Issues evaluated in the review process. Fix all issues before requesting a review.
     */
    reviewIssues?: string[];
}
