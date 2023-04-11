import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";
export declare class EnterpriseCrmEventbusProtoTriggerCriteria extends SpeakeasyBase {
    /**
     * Required. Standard filter expression, when true the workflow will be executed. If there's no trigger_criteria_task_implementation_class_name specified, the condition will be validated directly.
     */
    condition?: string;
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     */
    parameters?: EnterpriseCrmEventbusProtoEventParameters;
    /**
     * Optional. Implementation class name. The class should implement the “TypedTask” interface.
     */
    triggerCriteriaTaskImplementationClassName?: string;
}
