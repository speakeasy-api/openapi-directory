import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
/**
 * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
 */
export declare class EnterpriseCrmFrontendsEventbusProtoEventParameters extends SpeakeasyBase {
    /**
     * Parameters are a part of Event and can be used to communicate between different tasks that are part of the same workflow execution.
     */
    parameters?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
}
