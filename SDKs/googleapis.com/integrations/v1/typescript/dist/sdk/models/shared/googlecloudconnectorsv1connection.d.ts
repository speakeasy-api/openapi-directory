import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1AuthConfig } from "./googlecloudconnectorsv1authconfig";
import { GoogleCloudConnectorsV1ConfigVariable } from "./googlecloudconnectorsv1configvariable";
import { GoogleCloudConnectorsV1ConnectionStatus } from "./googlecloudconnectorsv1connectionstatus";
import { GoogleCloudConnectorsV1DestinationConfig } from "./googlecloudconnectorsv1destinationconfig";
import { GoogleCloudConnectorsV1LockConfig } from "./googlecloudconnectorsv1lockconfig";
import { GoogleCloudConnectorsV1NodeConfig } from "./googlecloudconnectorsv1nodeconfig";
import { GoogleCloudConnectorsV1SslConfig } from "./googlecloudconnectorsv1sslconfig";
/**
 * Connection represents an instance of connector.
 */
export declare class GoogleCloudConnectorsV1Connection extends SpeakeasyBase {
    /**
     * AuthConfig defines details of a authentication type.
     */
    authConfig?: GoogleCloudConnectorsV1AuthConfig;
    /**
     * Optional. Configuration for configuring the connection with an external system.
     */
    configVariables?: GoogleCloudConnectorsV1ConfigVariable[];
    /**
     * Required. Connector version on which the connection is created. The format is: projects/* /locations/* /providers/* /connectors/* /versions/* Only global location is supported for ConnectorVersion resource.
     */
    connectorVersion?: string;
    /**
     * Output only. Created time.
     */
    createTime?: string;
    /**
     * Optional. Description of the resource.
     */
    description?: string;
    /**
     * Optional. Configuration of the Connector's destination. Only accepted for Connectors that accepts user defined destination(s).
     */
    destinationConfigs?: GoogleCloudConnectorsV1DestinationConfig[];
    /**
     * Output only. GCR location where the envoy image is stored. formatted like: gcr.io/{bucketName}/{imageName}
     */
    envoyImageLocation?: string;
    /**
     * Output only. GCR location where the runtime image is stored. formatted like: gcr.io/{bucketName}/{imageName}
     */
    imageLocation?: string;
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: Record<string, string>;
    /**
     * Determines whether or no a connection is locked. If locked, a reason must be specified.
     */
    lockConfig?: GoogleCloudConnectorsV1LockConfig;
    /**
     * Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection}
     */
    name?: string;
    /**
     * Node configuration for the connection.
     */
    nodeConfig?: GoogleCloudConnectorsV1NodeConfig;
    /**
     * Optional. Service account needed for runtime plane to access GCP resources.
     */
    serviceAccount?: string;
    /**
     * Output only. The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address. e.g. "projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors"
     */
    serviceDirectory?: string;
    /**
     * SSL Configuration of a connection
     */
    sslConfig?: GoogleCloudConnectorsV1SslConfig;
    /**
     * ConnectionStatus indicates the state of the connection.
     */
    status?: GoogleCloudConnectorsV1ConnectionStatus;
    /**
     * Optional. Suspended indicates if a user has suspended a connection or not.
     */
    suspended?: boolean;
    /**
     * Output only. Updated time.
     */
    updateTime?: string;
}
