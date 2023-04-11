import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the combined condition calculation results.
 */
export declare class EnterpriseCrmEventbusProtoConditionResult extends SpeakeasyBase {
    /**
     * the current task number.
     */
    currentTaskNumber?: string;
    /**
     * the next task number.
     */
    nextTaskNumber?: string;
    /**
     * the result comes out after evaluate the combined condition. True if there's no combined condition specified.
     */
    result?: boolean;
}
