import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoCombinedCondition } from "./enterprisecrmeventbusprotocombinedcondition";
/**
 * The task that is next in line to be executed, if the condition specified evaluated to true.
 */
export declare class EnterpriseCrmEventbusProtoNextTask extends SpeakeasyBase {
    /**
     * Combined condition for this task to become an eligible next task. Each of these combined_conditions are joined with logical OR. DEPRECATED: use `condition`
     */
    combinedConditions?: EnterpriseCrmEventbusProtoCombinedCondition[];
    /**
     * Standard filter expression for this task to become an eligible next task.
     */
    condition?: string;
    /**
     * User-provided description intended to give more business context about the next task edge or condition.
     */
    description?: string;
    /**
     * User-provided label that is attached to this edge in the UI.
     */
    label?: string;
    /**
     * ID of the next task.
     */
    taskConfigId?: string;
    /**
     * Task number of the next task.
     */
    taskNumber?: string;
}
