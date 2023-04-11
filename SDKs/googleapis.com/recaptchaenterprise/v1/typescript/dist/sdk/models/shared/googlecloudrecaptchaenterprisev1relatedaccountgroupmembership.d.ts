import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A membership in a group of related accounts.
 */
export declare class GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership extends SpeakeasyBase {
    /**
     * The unique stable hashed user identifier of the member. The identifier corresponds to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call.
     */
    hashedAccountId?: string;
    /**
     * Required. The resource name for this membership in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}/memberships/{membership}`.
     */
    name?: string;
}
