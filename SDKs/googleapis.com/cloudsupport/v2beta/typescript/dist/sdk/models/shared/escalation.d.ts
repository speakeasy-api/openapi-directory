import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The reason why the Case is being escalated.
 */
export declare enum EscalationReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    ResolutionTime = "RESOLUTION_TIME",
    TechnicalExpertise = "TECHNICAL_EXPERTISE",
    BusinessImpact = "BUSINESS_IMPACT"
}
/**
 * An escalation of a support case.
 */
export declare class Escalation extends SpeakeasyBase {
    /**
     * Required. A free text description to accompany the `reason` field above. Provides additional context on why the case is being escalated.
     */
    justification?: string;
    /**
     * Required. The reason why the Case is being escalated.
     */
    reason?: EscalationReasonEnum;
}
