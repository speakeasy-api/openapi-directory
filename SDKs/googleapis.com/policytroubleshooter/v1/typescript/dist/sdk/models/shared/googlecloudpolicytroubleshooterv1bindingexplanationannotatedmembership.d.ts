import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether the binding includes the principal.
 */
export declare enum GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum {
    MembershipUnspecified = "MEMBERSHIP_UNSPECIFIED",
    MembershipIncluded = "MEMBERSHIP_INCLUDED",
    MembershipNotIncluded = "MEMBERSHIP_NOT_INCLUDED",
    MembershipUnknownInfoDenied = "MEMBERSHIP_UNKNOWN_INFO_DENIED",
    MembershipUnknownUnsupported = "MEMBERSHIP_UNKNOWN_UNSUPPORTED"
}
/**
 * The relevance of the principal's status to the overall determination for the binding.
 */
export declare enum GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
/**
 * Details about whether the binding includes the principal.
 */
export declare class GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership extends SpeakeasyBase {
    /**
     * Indicates whether the binding includes the principal.
     */
    membership?: GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum;
    /**
     * The relevance of the principal's status to the overall determination for the binding.
     */
    relevance?: GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum;
}
