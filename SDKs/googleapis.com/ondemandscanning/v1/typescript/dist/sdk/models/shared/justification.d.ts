import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The justification type for this vulnerability.
 */
export declare enum JustificationJustificationTypeEnum {
    JustificationTypeUnspecified = "JUSTIFICATION_TYPE_UNSPECIFIED",
    ComponentNotPresent = "COMPONENT_NOT_PRESENT",
    VulnerableCodeNotPresent = "VULNERABLE_CODE_NOT_PRESENT",
    VulnerableCodeNotInExecutePath = "VULNERABLE_CODE_NOT_IN_EXECUTE_PATH",
    VulnerableCodeCannotBeControlledByAdversary = "VULNERABLE_CODE_CANNOT_BE_CONTROLLED_BY_ADVERSARY",
    InlineMitigationsAlreadyExist = "INLINE_MITIGATIONS_ALREADY_EXIST"
}
/**
 * Justification provides the justification when the state of the assessment if NOT_AFFECTED.
 */
export declare class Justification extends SpeakeasyBase {
    /**
     * Additional details on why this justification was chosen.
     */
    details?: string;
    /**
     * The justification type for this vulnerability.
     */
    justificationType?: JustificationJustificationTypeEnum;
}
