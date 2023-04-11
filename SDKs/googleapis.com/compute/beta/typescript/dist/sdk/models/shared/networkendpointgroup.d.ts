import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkEndpointGroupAppEngine } from "./networkendpointgroupappengine";
import { NetworkEndpointGroupCloudFunction } from "./networkendpointgroupcloudfunction";
import { NetworkEndpointGroupCloudRun } from "./networkendpointgroupcloudrun";
import { NetworkEndpointGroupLbNetworkEndpointGroup } from "./networkendpointgrouplbnetworkendpointgroup";
import { NetworkEndpointGroupPscData } from "./networkendpointgrouppscdata";
import { NetworkEndpointGroupServerlessDeployment } from "./networkendpointgroupserverlessdeployment";
/**
 * Type of network endpoints in this network endpoint group. Can be one of GCE_VM_IP, GCE_VM_IP_PORT, NON_GCP_PRIVATE_IP_PORT, INTERNET_FQDN_PORT, INTERNET_IP_PORT, SERVERLESS, PRIVATE_SERVICE_CONNECT.
 */
export declare enum NetworkEndpointGroupNetworkEndpointTypeEnum {
    GceVmIp = "GCE_VM_IP",
    GceVmIpPort = "GCE_VM_IP_PORT",
    InternetFqdnPort = "INTERNET_FQDN_PORT",
    InternetIpPort = "INTERNET_IP_PORT",
    NonGcpPrivateIpPort = "NON_GCP_PRIVATE_IP_PORT",
    PrivateServiceConnect = "PRIVATE_SERVICE_CONNECT",
    Serverless = "SERVERLESS"
}
/**
 * Represents a collection of network endpoints. A network endpoint group (NEG) defines how a set of endpoints should be reached, whether they are reachable, and where they are located. For more information about using NEGs, see Setting up external HTTP(S) Load Balancing with internet NEGs, Setting up zonal NEGs, or Setting up external HTTP(S) Load Balancing with serverless NEGs.
 */
export declare class NetworkEndpointGroup extends SpeakeasyBase {
    /**
     * Metadata defined as annotations on the network endpoint group.
     */
    annotations?: Record<string, string>;
    /**
     * Configuration for an App Engine network endpoint group (NEG). The service is optional, may be provided explicitly or in the URL mask. The version is optional and can only be provided explicitly or in the URL mask when service is present. Note: App Engine service must be in the same project and located in the same region as the Serverless NEG.
     */
    appEngine?: NetworkEndpointGroupAppEngine;
    /**
     * Configuration for a Cloud Function network endpoint group (NEG). The function must be provided explicitly or in the URL mask. Note: Cloud Function must be in the same project and located in the same region as the Serverless NEG.
     */
    cloudFunction?: NetworkEndpointGroupCloudFunction;
    /**
     * Configuration for a Cloud Run network endpoint group (NEG). The service must be provided explicitly or in the URL mask. The tag is optional, may be provided explicitly or in the URL mask. Note: Cloud Run service must be in the same project and located in the same region as the Serverless NEG.
     */
    cloudRun?: NetworkEndpointGroupCloudRun;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * The default port used if the port number is not specified in the network endpoint.
     */
    defaultPort?: number;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#networkEndpointGroup for network endpoint group.
     */
    kind?: string;
    /**
     * Load balancing specific fields for network endpoint group.
     */
    loadBalancer?: NetworkEndpointGroupLbNetworkEndpointGroup;
    /**
     * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * The URL of the network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified.
     */
    network?: string;
    /**
     * Type of network endpoints in this network endpoint group. Can be one of GCE_VM_IP, GCE_VM_IP_PORT, NON_GCP_PRIVATE_IP_PORT, INTERNET_FQDN_PORT, INTERNET_IP_PORT, SERVERLESS, PRIVATE_SERVICE_CONNECT.
     */
    networkEndpointType?: NetworkEndpointGroupNetworkEndpointTypeEnum;
    /**
     * All data that is specifically relevant to only network endpoint groups of type PRIVATE_SERVICE_CONNECT.
     */
    pscData?: NetworkEndpointGroupPscData;
    /**
     * The target service url used to set up private service connection to a Google API or a PSC Producer Service Attachment. An example value is: "asia-northeast3-cloudkms.googleapis.com"
     */
    pscTargetService?: string;
    /**
     * [Output Only] The URL of the region where the network endpoint group is located.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * Configuration for a serverless network endpoint group (NEG). The platform must be provided. Note: The target backend service must be in the same project and located in the same region as the Serverless NEG.
     */
    serverlessDeployment?: NetworkEndpointGroupServerlessDeployment;
    /**
     * [Output only] Number of network endpoints in the network endpoint group.
     */
    size?: number;
    /**
     * Optional URL of the subnetwork to which all network endpoints in the NEG belong.
     */
    subnetwork?: string;
    /**
     * [Output Only] The URL of the zone where the network endpoint group is located.
     */
    zone?: string;
}
