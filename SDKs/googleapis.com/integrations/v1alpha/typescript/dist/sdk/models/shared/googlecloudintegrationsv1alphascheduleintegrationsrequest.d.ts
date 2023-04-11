import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
/**
 * The request for scheduling an integration.
 */
export declare class GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest extends SpeakeasyBase {
    /**
     * Optional. Input parameters used by integration execution.
     */
    inputParameters?: Record<string, GoogleCloudIntegrationsV1alphaValueType>;
    /**
     * Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution.
     */
    parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     */
    parameters?: EnterpriseCrmEventbusProtoEventParameters;
    /**
     * This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned.
     */
    requestId?: string;
    /**
     * The time that the integration should be executed. If the time is less or equal to the current time, the integration is executed immediately.
     */
    scheduleTime?: string;
    /**
     * Matched against all {@link TriggerConfig}s across all integrations. i.e. TriggerConfig.trigger_id.equals(trigger_id)
     */
    triggerId?: string;
}
