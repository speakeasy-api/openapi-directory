import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
/**
 * Next available id: 4
 */
export declare class EnterpriseCrmFrontendsEventbusProtoRollbackStrategy extends SpeakeasyBase {
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     */
    parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    /**
     * Required. This is the name of the task that needs to be executed upon rollback of this task.
     */
    rollbackTaskImplementationClassName?: string;
    /**
     * Required. These are the tasks numbers of the tasks whose `rollback_strategy.rollback_task_implementation_class_name` needs to be executed upon failure of this task.
     */
    taskNumbersToRollback?: string[];
}
