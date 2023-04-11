import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Destination } from "./googlecloudconnectorsv1destination";
/**
 * Define the Connectors target endpoint.
 */
export declare class GoogleCloudConnectorsV1DestinationConfig extends SpeakeasyBase {
    /**
     * The destinations for the key.
     */
    destinations?: GoogleCloudConnectorsV1Destination[];
    /**
     * The key is the destination identifier that is supported by the Connector.
     */
    key?: string;
}
