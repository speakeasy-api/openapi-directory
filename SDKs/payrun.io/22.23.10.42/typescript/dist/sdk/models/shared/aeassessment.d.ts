import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The a e assessments' assessment code
 */
export declare enum AEAssessmentAEAssessmentAssessmentCodeEnum {
    Excluded = "Excluded",
    EligibleJobHolder = "EligibleJobHolder",
    NonEligibleJobHolder = "NonEligibleJobHolder",
    EntitledWorker = "EntitledWorker"
}
/**
 * The a e assessments' assessment event
 */
export declare enum AEAssessmentAEAssessmentAssessmentEventEnum {
    NonEnrolmentEvent = "NonEnrolmentEvent",
    AutomaticEnrolment = "AutomaticEnrolment",
    OptIn = "OptIn",
    VoluntaryJoiner = "VoluntaryJoiner",
    ContractualEnrolment = "ContractualEnrolment"
}
/**
 * The a e assessments' assessment override
 */
export declare enum AEAssessmentAEAssessmentAssessmentOverrideEnum {
    None = "None",
    OptOut = "OptOut",
    OptIn = "OptIn",
    VoluntaryJoiner = "VoluntaryJoiner",
    ContractualPension = "ContractualPension",
    CeasedMembership = "CeasedMembership",
    Leaver = "Leaver",
    Excluded = "Excluded"
}
/**
 * The a e assessments' assessment result
 */
export declare enum AEAssessmentAEAssessmentAssessmentResultEnum {
    Inconclusive = "Inconclusive",
    NoChange = "NoChange",
    Enrol = "Enrol",
    Exit = "Exit"
}
export declare class AEAssessmentAEAssessment extends SpeakeasyBase {
    /**
     * The a e assessments' age
     */
    age?: number;
    /**
     * The a e assessments' assessment code
     */
    assessmentCode?: AEAssessmentAEAssessmentAssessmentCodeEnum;
    /**
     * The a e assessments' assessment date
     */
    assessmentDate?: Date;
    /**
     * The a e assessments' assessment event
     */
    assessmentEvent?: AEAssessmentAEAssessmentAssessmentEventEnum;
    /**
     * The a e assessments' assessment override
     */
    assessmentOverride?: AEAssessmentAEAssessmentAssessmentOverrideEnum;
    /**
     * The a e assessments' assessment result
     */
    assessmentResult?: AEAssessmentAEAssessmentAssessmentResultEnum;
    /**
     * The a e assessments' is member of alternative pension scheme
     */
    isMemberOfAlternativePensionScheme?: boolean;
    /**
     * The a e assessments' opt out window end date
     */
    optOutWindowEndDate?: Date;
    /**
     * The a e assessments' qualifying earnings
     */
    qualifyingEarnings?: number;
    /**
     * The a e assessments' reenrolment date
     */
    reenrolmentDate?: Date;
    /**
     * The a e assessments' state pension age
     */
    statePensionAge?: number;
    /**
     * The a e assessments' state pension date
     */
    statePensionDate?: Date;
    /**
     * The a e assessments' tax period
     */
    taxPeriod?: number;
    /**
     * The a e assessments' tax year
     */
    taxYear?: number;
}
/**
 * The a e assessment object.
 */
export declare class AEAssessment extends SpeakeasyBase {
    aeAssessment?: AEAssessmentAEAssessment;
}
