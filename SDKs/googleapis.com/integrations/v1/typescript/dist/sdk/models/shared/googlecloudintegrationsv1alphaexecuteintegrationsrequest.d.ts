import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
/**
 * The request for executing an integration.
 */
export declare class GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest extends SpeakeasyBase {
    /**
     * Optional. Flag to determine how to should propagate errors. If this flag is set to be true, it will not throw an exception. Instead, it will return a {@link ExecuteIntegrationsResponse} with an execution id and error messages as PostWithTriggerIdExecutionException in {@link EventParameters}. The flag is set to be false by default.
     */
    doNotPropagateError?: boolean;
    /**
     * Optional. The id of the ON_HOLD execution to be resumed.
     */
    executionId?: string;
    /**
     * Optional. Input parameters used by integration execution.
     */
    inputParameters?: Record<string, GoogleCloudIntegrationsV1alphaValueType>;
    /**
     * Optional. Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution.
     */
    parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     */
    parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    /**
     * Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned.
     */
    requestId?: string;
    /**
     * Required. Matched against all {@link TriggerConfig}s across all integrations. i.e. TriggerConfig.trigger_id.equals(trigger_id). The trigger_id is in the format of `api_trigger/TRIGGER_NAME`.
     */
    triggerId?: string;
}
