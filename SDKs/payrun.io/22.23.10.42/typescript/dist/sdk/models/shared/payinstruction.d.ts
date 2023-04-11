import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayInstructionPayInstruction extends SpeakeasyBase {
    /**
     * The pay instructions' description
     */
    description?: string;
    /**
     * The pay instructions' end date
     */
    endDate?: Date;
    /**
     * The pay instructions' pay line tag
     */
    payLineTag?: string;
    /**
     * The pay instructions' start date
     */
    startDate?: Date;
}
/**
 * The pay instruction object.
 */
export declare class PayInstruction extends SpeakeasyBase {
    payInstruction?: PayInstructionPayInstruction;
}
