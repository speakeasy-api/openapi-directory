import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions } from "./googlecloudassuredworkloadsv1violationremediationinstructions";
/**
 * Output only. Reemediation type based on the type of org policy values violated
 */
export declare enum GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum {
    RemediationTypeUnspecified = "REMEDIATION_TYPE_UNSPECIFIED",
    RemediationBooleanOrgPolicyViolation = "REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION",
    RemediationListAllowedValuesOrgPolicyViolation = "REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION",
    RemediationListDeniedValuesOrgPolicyViolation = "REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION",
    RemediationRestrictCmekCryptoKeyProjectsOrgPolicyViolation = "REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION"
}
/**
 * Represents remediation guidance to resolve compliance violation for AssuredWorkload
 */
export declare class GoogleCloudAssuredworkloadsV1ViolationRemediation extends SpeakeasyBase {
    /**
     * Values that can resolve the violation For example: for list org policy violations, this will either be the list of allowed or denied values
     */
    compliantValues?: string[];
    /**
     * Instructions to remediate violation
     */
    instructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions;
    /**
     * Output only. Reemediation type based on the type of org policy values violated
     */
    remediationType?: GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum;
}
