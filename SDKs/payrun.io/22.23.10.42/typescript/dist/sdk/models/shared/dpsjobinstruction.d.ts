import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The dps job instructions' employer
 */
export declare class DpsJobInstructionDpsJobInstructionEmployer extends SpeakeasyBase {
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
 * The dps job instructions' message types
 */
export declare class DpsJobInstructionDpsJobInstructionType extends SpeakeasyBase {
    type?: any[];
}
export declare class DpsJobInstructionDpsJobInstructionMessageMessage extends SpeakeasyBase {
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
 * The dps job instructions' messages to process
 */
export declare class DpsJobInstructionDpsJobInstructionMessage extends SpeakeasyBase {
    message?: DpsJobInstructionDpsJobInstructionMessageMessage[];
}
export declare class DpsJobInstructionDpsJobInstruction extends SpeakeasyBase {
    /**
     * The dps job instructions' apply
     */
    apply?: boolean;
    /**
     * The dps job instructions' employer
     */
    employer?: DpsJobInstructionDpsJobInstructionEmployer;
    /**
     * The dps job instructions' from date
     */
    fromDate?: Date;
    /**
     * The dps job instructions' holding date
     */
    holdingDate?: Date;
    /**
     * The dps job instructions' message types
     */
    messageTypes?: DpsJobInstructionDpsJobInstructionType;
    /**
     * The dps job instructions' messages to process
     */
    messagesToProcess?: DpsJobInstructionDpsJobInstructionMessage;
    /**
     * The dps job instructions' retrieve
     */
    retrieve?: boolean;
}
/**
 * The the DPS job instruction object.
 */
export declare class DpsJobInstruction extends SpeakeasyBase {
    dpsJobInstruction?: DpsJobInstructionDpsJobInstruction;
}
