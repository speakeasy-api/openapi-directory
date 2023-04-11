import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether the binding includes the member.
 */
export declare enum GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum {
    MembershipUnspecified = "MEMBERSHIP_UNSPECIFIED",
    MembershipIncluded = "MEMBERSHIP_INCLUDED",
    MembershipNotIncluded = "MEMBERSHIP_NOT_INCLUDED",
    MembershipUnknownInfoDenied = "MEMBERSHIP_UNKNOWN_INFO_DENIED",
    MembershipUnknownUnsupported = "MEMBERSHIP_UNKNOWN_UNSUPPORTED"
}
/**
 * The relevance of the member's status to the overall determination for the binding.
 */
export declare enum GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
/**
 * Details about whether the binding includes the member.
 */
export declare class GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership extends SpeakeasyBase {
    /**
     * Indicates whether the binding includes the member.
     */
    membership?: GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum;
    /**
     * The relevance of the member's status to the overall determination for the binding.
     */
    relevance?: GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum;
}
