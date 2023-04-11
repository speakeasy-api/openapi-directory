import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class CallInstruction extends SpeakeasyBase {
    /**
     * Datetime of when the call instructions were created
     */
    createdAt?: Date;
    /**
     * ID of call instructions
     */
    id?: number;
    /**
     * The instructions
     */
    instructions?: string;
    /**
     * Datetime of when the call instructions were last updated
     */
    updatedAt?: Date;
}
