import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The rti job instructions' employer
 */
export declare class RtiJobInstructionRtiJobInstructionEmployer extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
/**
 * The rti job instructions' late reason
 */
export declare enum RtiJobInstructionRtiJobInstructionLateReasonEnum {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    F = "F",
    G = "G",
    H = "H"
}
/**
 * The rti job instructions' pay schedule
 */
export declare class RtiJobInstructionRtiJobInstructionPaySchedule extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
/**
 * The rti job instructions' rti transaction
 */
export declare class RtiJobInstructionRtiJobInstructionRtiTransaction extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
export declare class RtiJobInstructionRtiJobInstruction extends SpeakeasyBase {
    /**
     * The rti job instructions' earlier tax year
     */
    earlierTaxYear?: number;
    /**
     * The rti job instructions' employer
     */
    employer?: RtiJobInstructionRtiJobInstructionEmployer;
    /**
     * The rti job instructions' final submission for year
     */
    finalSubmissionForYear?: boolean;
    /**
     * The rti job instructions' generate
     */
    generate?: boolean;
    /**
     * The rti job instructions' holding date
     */
    holdingDate?: Date;
    /**
     * The rti job instructions' late reason
     */
    lateReason?: RtiJobInstructionRtiJobInstructionLateReasonEnum;
    /**
     * The rti job instructions' no payment for period from
     */
    noPaymentForPeriodFrom?: Date;
    /**
     * The rti job instructions' no payment for period to
     */
    noPaymentForPeriodTo?: Date;
    /**
     * The rti job instructions' pay schedule
     */
    paySchedule?: RtiJobInstructionRtiJobInstructionPaySchedule;
    /**
     * The rti job instructions' payment date
     */
    paymentDate?: Date;
    /**
     * The rti job instructions' period of inactivity from
     */
    periodOfInactivityFrom?: Date;
    /**
     * The rti job instructions' period of inactivity to
     */
    periodOfInactivityTo?: Date;
    /**
     * The rti job instructions' rti transaction
     */
    rtiTransaction?: RtiJobInstructionRtiJobInstructionRtiTransaction;
    /**
     * The rti job instructions' rti type
     */
    rtiType?: string;
    /**
     * The rti job instructions' scheme ceased
     */
    schemeCeased?: Date;
    /**
     * The rti job instructions' tax month
     */
    taxMonth?: number;
    /**
     * The rti job instructions' tax year
     */
    taxYear?: number;
    /**
     * The rti job instructions' timestamp
     */
    timestamp?: Date;
    /**
     * The rti job instructions' transmit
     */
    transmit?: boolean;
}
/**
 * The the RTI job instruction object.
 */
export declare class RtiJobInstruction extends SpeakeasyBase {
    rtiJobInstruction?: RtiJobInstructionRtiJobInstruction;
}
