import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { GoogleCloudIntegrationsV1alphaIntegrationVersionInput } from "./googlecloudintegrationsv1alphaintegrationversion";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
/**
 * The request for testing an integration.
 */
export declare class GoogleCloudIntegrationsV1alphaTestIntegrationsRequestInput extends SpeakeasyBase {
    /**
     * Required. This is used to identify the client on whose behalf the event will be executed.
     */
    clientId?: string;
    /**
     * Optional. custom deadline of the rpc
     */
    deadlineSecondsTime?: string;
    /**
     * Optional. Input parameters used during integration execution.
     */
    inputParameters?: Record<string, GoogleCloudIntegrationsV1alphaValueType>;
    /**
     * The integration version definition.
     */
    integrationVersion?: GoogleCloudIntegrationsV1alphaIntegrationVersionInput;
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     */
    parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    /**
     * Optional. Can be specified in the event request, otherwise false (default). If true, enables tasks with condition "test_mode = true". If false, disables tasks with condition "test_mode = true" if global test mode (set by platform) is also false {@link EventBusConfig}.
     */
    testMode?: boolean;
    /**
     * Required. The trigger id of the integration trigger config. If both trigger_id and client_id is present, the integration is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks.
     */
    triggerId?: string;
}
