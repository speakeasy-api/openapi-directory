import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
/**
 * The response for executing an integration.
 */
export declare class GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse extends SpeakeasyBase {
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     */
    eventParameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    /**
     * Is true if any execution in the integration failed. False otherwise.
     */
    executionFailed?: boolean;
    /**
     * The id of the execution corresponding to this run of integration.
     */
    executionId?: string;
    /**
     * OUTPUT parameters in format of Map. Where Key is the name of the parameter. Note: Name of the system generated parameters are wrapped by backtick(`) to distinguish them from the user defined parameters.
     */
    outputParameters?: Record<string, any>;
    /**
     * Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution.
     */
    parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
}
