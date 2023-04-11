import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The action when a pod creation is denied by the admission rule.
 */
export declare enum AdmissionRuleEnforcementModeEnum {
    EnforcementModeUnspecified = "ENFORCEMENT_MODE_UNSPECIFIED",
    EnforcedBlockAndAuditLog = "ENFORCED_BLOCK_AND_AUDIT_LOG",
    DryrunAuditLogOnly = "DRYRUN_AUDIT_LOG_ONLY"
}
/**
 * Required. How this admission rule will be evaluated.
 */
export declare enum AdmissionRuleEvaluationModeEnum {
    EvaluationModeUnspecified = "EVALUATION_MODE_UNSPECIFIED",
    AlwaysAllow = "ALWAYS_ALLOW",
    RequireAttestation = "REQUIRE_ATTESTATION",
    AlwaysDeny = "ALWAYS_DENY"
}
/**
 * An admission rule specifies either that all container images used in a pod creation request must be attested to by one or more attestors, that all pod creations will be allowed, or that all pod creations will be denied. Images matching an admission allowlist pattern are exempted from admission rules and will never block a pod creation.
 */
export declare class AdmissionRule extends SpeakeasyBase {
    /**
     * Required. The action when a pod creation is denied by the admission rule.
     */
    enforcementMode?: AdmissionRuleEnforcementModeEnum;
    /**
     * Required. How this admission rule will be evaluated.
     */
    evaluationMode?: AdmissionRuleEvaluationModeEnum;
    /**
     * Optional. The resource names of the attestors that must attest to a container image, in the format `projects/* /attestors/*`. Each attestor must exist before a policy can reference it. To add an attestor to a policy the principal issuing the policy change request must be able to read the attestor resource. Note: this field must be non-empty when the evaluation_mode field specifies REQUIRE_ATTESTATION, otherwise it must be empty.
     */
    requireAttestationsBy?: string[];
}
