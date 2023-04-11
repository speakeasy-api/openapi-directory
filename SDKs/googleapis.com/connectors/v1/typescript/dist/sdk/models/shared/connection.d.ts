import { SpeakeasyBase } from "../../../internal/utils";
import { AuthConfig } from "./authconfig";
import { ConfigVariable } from "./configvariable";
import { ConnectionStatus } from "./connectionstatus";
import { DestinationConfig } from "./destinationconfig";
import { LockConfig } from "./lockconfig";
import { NodeConfig } from "./nodeconfig";
import { SslConfig } from "./sslconfig";
/**
 * Connection represents an instance of connector.
 */
export declare class ConnectionInput extends SpeakeasyBase {
    /**
     * AuthConfig defines details of a authentication type.
     */
    authConfig?: AuthConfig;
    /**
     * Optional. Configuration for configuring the connection with an external system.
     */
    configVariables?: ConfigVariable[];
    /**
     * Required. Connector version on which the connection is created. The format is: projects/* /locations/* /providers/* /connectors/* /versions/* Only global location is supported for ConnectorVersion resource.
     */
    connectorVersion?: string;
    /**
     * Optional. Description of the resource.
     */
    description?: string;
    /**
     * Optional. Configuration of the Connector's destination. Only accepted for Connectors that accepts user defined destination(s).
     */
    destinationConfigs?: DestinationConfig[];
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: Record<string, string>;
    /**
     * Determines whether or no a connection is locked. If locked, a reason must be specified.
     */
    lockConfig?: LockConfig;
    /**
     * Node configuration for the connection.
     */
    nodeConfig?: NodeConfig;
    /**
     * Optional. Service account needed for runtime plane to access GCP resources.
     */
    serviceAccount?: string;
    /**
     * SSL Configuration of a connection
     */
    sslConfig?: SslConfig;
    /**
     * ConnectionStatus indicates the state of the connection.
     */
    status?: ConnectionStatus;
    /**
     * Optional. Suspended indicates if a user has suspended a connection or not.
     */
    suspended?: boolean;
}
/**
 * Connection represents an instance of connector.
 */
export declare class Connection extends SpeakeasyBase {
    /**
     * AuthConfig defines details of a authentication type.
     */
    authConfig?: AuthConfig;
    /**
     * Optional. Configuration for configuring the connection with an external system.
     */
    configVariables?: ConfigVariable[];
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
    destinationConfigs?: DestinationConfig[];
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
    lockConfig?: LockConfig;
    /**
     * Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection}
     */
    name?: string;
    /**
     * Node configuration for the connection.
     */
    nodeConfig?: NodeConfig;
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
    sslConfig?: SslConfig;
    /**
     * ConnectionStatus indicates the state of the connection.
     */
    status?: ConnectionStatus;
    /**
     * Optional. Suspended indicates if a user has suspended a connection or not.
     */
    suspended?: boolean;
    /**
     * Output only. Updated time.
     */
    updateTime?: string;
}
