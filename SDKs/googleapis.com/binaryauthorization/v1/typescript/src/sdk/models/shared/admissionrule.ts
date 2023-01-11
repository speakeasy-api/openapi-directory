import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AdmissionRuleEnforcementModeEnum {
    EnforcementModeUnspecified = "ENFORCEMENT_MODE_UNSPECIFIED",
    EnforcedBlockAndAuditLog = "ENFORCED_BLOCK_AND_AUDIT_LOG",
    DryrunAuditLogOnly = "DRYRUN_AUDIT_LOG_ONLY"
}

export enum AdmissionRuleEvaluationModeEnum {
    EvaluationModeUnspecified = "EVALUATION_MODE_UNSPECIFIED",
    AlwaysAllow = "ALWAYS_ALLOW",
    RequireAttestation = "REQUIRE_ATTESTATION",
    AlwaysDeny = "ALWAYS_DENY"
}


export class AdmissionRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforcementMode" })
  enforcementMode?: AdmissionRuleEnforcementModeEnum;

  @SpeakeasyMetadata({ data: "json, name=evaluationMode" })
  evaluationMode?: AdmissionRuleEvaluationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=requireAttestationsBy" })
  requireAttestationsBy?: string[];
}
