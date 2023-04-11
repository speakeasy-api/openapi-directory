import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Grouping of IAM role and IAM member.
 */
export declare class PolicyBinding extends SpeakeasyBase {
    /**
     * Required. Member to bind the role with. See /iam/docs/reference/rest/v1/Policy#Binding for how to format each member. Eg. - user:myuser@mydomain.com - serviceAccount:my-service-account@app.gserviceaccount.com
     */
    member?: string;
    /**
     * Required. Role to apply. Only allowlisted roles can be used at the specified granularity. The role must be one of the following: - 'roles/container.hostServiceAgentUser' applied on the shared VPC host project - 'roles/compute.securityAdmin' applied on the shared VPC host project
     */
    role?: string;
}
