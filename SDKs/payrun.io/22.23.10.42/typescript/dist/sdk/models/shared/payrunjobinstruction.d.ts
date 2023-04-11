import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayRunJobInstructionPayRunJobInstructionEmployeeEmployee extends SpeakeasyBase {
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
 * The pay run job instructions' employees
 */
export declare class PayRunJobInstructionPayRunJobInstructionEmployee extends SpeakeasyBase {
    employee?: PayRunJobInstructionPayRunJobInstructionEmployeeEmployee[];
}
/**
 * The pay run job instructions' pay schedule
 */
export declare class PayRunJobInstructionPayRunJobInstructionPaySchedule extends SpeakeasyBase {
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
export declare class PayRunJobInstructionPayRunJobInstruction extends SpeakeasyBase {
    /**
     * The pay run job instructions' employees
     */
    employees?: PayRunJobInstructionPayRunJobInstructionEmployee;
    /**
     * The pay run job instructions' end date
     */
    endDate?: Date;
    /**
     * The pay run job instructions' holding date
     */
    holdingDate?: Date;
    /**
     * The pay run job instructions' is supplementary
     */
    isSupplementary?: boolean;
    /**
     * The pay run job instructions' pay schedule
     */
    paySchedule?: PayRunJobInstructionPayRunJobInstructionPaySchedule;
    /**
     * The pay run job instructions' payment date
     */
    paymentDate?: Date;
    /**
     * The pay run job instructions' start date
     */
    startDate?: Date;
}
/**
 * The pay run job instruction object.
 */
export declare class PayRunJobInstruction extends SpeakeasyBase {
    payRunJobInstruction?: PayRunJobInstructionPayRunJobInstruction;
}
