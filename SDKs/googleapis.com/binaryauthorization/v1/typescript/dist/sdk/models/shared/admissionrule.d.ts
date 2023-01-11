import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AdmissionRuleEnforcementModeEnum {
    EnforcementModeUnspecified = "ENFORCEMENT_MODE_UNSPECIFIED",
    EnforcedBlockAndAuditLog = "ENFORCED_BLOCK_AND_AUDIT_LOG",
    DryrunAuditLogOnly = "DRYRUN_AUDIT_LOG_ONLY"
}
export declare enum AdmissionRuleEvaluationModeEnum {
    EvaluationModeUnspecified = "EVALUATION_MODE_UNSPECIFIED",
    AlwaysAllow = "ALWAYS_ALLOW",
    RequireAttestation = "REQUIRE_ATTESTATION",
    AlwaysDeny = "ALWAYS_DENY"
}
export declare class AdmissionRule extends SpeakeasyBase {
    enforcementMode?: AdmissionRuleEnforcementModeEnum;
    evaluationMode?: AdmissionRuleEvaluationModeEnum;
    requireAttestationsBy?: string[];
}
