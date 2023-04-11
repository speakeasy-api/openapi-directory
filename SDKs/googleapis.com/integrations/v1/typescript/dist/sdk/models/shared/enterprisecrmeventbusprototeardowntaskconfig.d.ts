import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventBusProperties } from "./enterprisecrmeventbusprotoeventbusproperties";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";
import { EnterpriseCrmEventbusProtoNextTeardownTask } from "./enterprisecrmeventbusprotonextteardowntask";
export declare class EnterpriseCrmEventbusProtoTeardownTaskConfig extends SpeakeasyBase {
    /**
     * The creator's email address.
     */
    creatorEmail?: string;
    /**
     * Required. Unique identifier of the teardown task within this Config. We use this field as the identifier to find next teardown tasks.
     */
    name?: string;
    /**
     * The teardown task that is next in line to be executed. We support only sequential execution of teardown tasks (i.e. no branching).
     */
    nextTeardownTask?: EnterpriseCrmEventbusProtoNextTeardownTask;
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     */
    parameters?: EnterpriseCrmEventbusProtoEventParameters;
    /**
     * LINT.IfChange This message is used for storing key value pair properties for each Event / Task in the EventBus.
     */
    properties?: EnterpriseCrmEventbusProtoEventBusProperties;
    /**
     * Required. Implementation class name.
     */
    teardownTaskImplementationClassName?: string;
}
