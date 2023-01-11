import { SpeakeasyBase } from "../../../internal/utils";
import { AdmissionWhitelistPattern } from "./admissionwhitelistpattern";
import { AdmissionRule } from "./admissionrule";
export declare enum PolicyGlobalPolicyEvaluationModeEnum {
    GlobalPolicyEvaluationModeUnspecified = "GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED",
    Enable = "ENABLE",
    Disable = "DISABLE"
}
/**
 * A policy for container image binary authorization.
**/
export declare class Policy extends SpeakeasyBase {
    admissionWhitelistPatterns?: AdmissionWhitelistPattern[];
    clusterAdmissionRules?: Record<string, AdmissionRule>;
    defaultAdmissionRule?: AdmissionRule;
    description?: string;
    etag?: string;
    globalPolicyEvaluationMode?: PolicyGlobalPolicyEvaluationModeEnum;
    istioServiceIdentityAdmissionRules?: Record<string, AdmissionRule>;
    kubernetesNamespaceAdmissionRules?: Record<string, AdmissionRule>;
    kubernetesServiceAccountAdmissionRules?: Record<string, AdmissionRule>;
    name?: string;
    updateTime?: string;
}
