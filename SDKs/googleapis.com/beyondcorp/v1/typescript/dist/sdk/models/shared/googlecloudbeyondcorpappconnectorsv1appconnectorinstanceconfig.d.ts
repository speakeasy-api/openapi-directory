import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1ImageConfig } from "./googlecloudbeyondcorpappconnectorsv1imageconfig";
import { GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig } from "./googlecloudbeyondcorpappconnectorsv1notificationconfig";
/**
 * AppConnectorInstanceConfig defines the instance config of a AppConnector.
 */
export declare class GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig extends SpeakeasyBase {
    /**
     * ImageConfig defines the control plane images to run.
     */
    imageConfig?: GoogleCloudBeyondcorpAppconnectorsV1ImageConfig;
    /**
     * The SLM instance agent configuration.
     */
    instanceConfig?: Record<string, any>;
    /**
     * NotificationConfig defines the mechanisms to notify instance agent.
     */
    notificationConfig?: GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig;
    /**
     * Required. A monotonically increasing number generated and maintained by the API provider. Every time a config changes in the backend, the sequenceNumber should be bumped up to reflect the change.
     */
    sequenceNumber?: string;
}
