import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
/**
 * The response for testing an integration.
 */
export declare class GoogleCloudIntegrationsV1alphaTestIntegrationsResponse extends SpeakeasyBase {
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
     * Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution.
     */
    parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
    /**
     * Optional. Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution.
     */
    parameters?: Record<string, GoogleCloudIntegrationsV1alphaValueType>;
}
