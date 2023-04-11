import { SpeakeasyBase } from "../../../internal/utils";
import { CloudSQLConfig } from "./cloudsqlconfig";
import { GoogleCloudServicenetworkingV1ConsumerConfigReservedRange } from "./googlecloudservicenetworkingv1consumerconfigreservedrange";
/**
 * Configuration information for a private service access connection.
 */
export declare class ConsumerConfigInput extends SpeakeasyBase {
    /**
     * Represents one or multiple Cloud SQL configurations.
     */
    cloudsqlConfigs?: CloudSQLConfig[];
    /**
     * Export custom routes flag value for peering from consumer to producer.
     */
    consumerExportCustomRoutes?: boolean;
    /**
     * Export subnet routes with public ip flag value for peering from consumer to producer.
     */
    consumerExportSubnetRoutesWithPublicIp?: boolean;
    /**
     * Import custom routes flag value for peering from consumer to producer.
     */
    consumerImportCustomRoutes?: boolean;
    /**
     * Import subnet routes with public ip flag value for peering from consumer to producer.
     */
    consumerImportSubnetRoutesWithPublicIp?: boolean;
    /**
     * Export custom routes flag value for peering from producer to consumer.
     */
    producerExportCustomRoutes?: boolean;
    /**
     * Export subnet routes with public ip flag value for peering from producer to consumer.
     */
    producerExportSubnetRoutesWithPublicIp?: boolean;
    /**
     * Import custom routes flag value for peering from producer to consumer.
     */
    producerImportCustomRoutes?: boolean;
    /**
     * Import subnet routes with public ip flag value for peering from producer to consumer.
     */
    producerImportSubnetRoutesWithPublicIp?: boolean;
}
/**
 * Configuration information for a private service access connection.
 */
export declare class ConsumerConfig extends SpeakeasyBase {
    /**
     * Represents one or multiple Cloud SQL configurations.
     */
    cloudsqlConfigs?: CloudSQLConfig[];
    /**
     * Export custom routes flag value for peering from consumer to producer.
     */
    consumerExportCustomRoutes?: boolean;
    /**
     * Export subnet routes with public ip flag value for peering from consumer to producer.
     */
    consumerExportSubnetRoutesWithPublicIp?: boolean;
    /**
     * Import custom routes flag value for peering from consumer to producer.
     */
    consumerImportCustomRoutes?: boolean;
    /**
     * Import subnet routes with public ip flag value for peering from consumer to producer.
     */
    consumerImportSubnetRoutesWithPublicIp?: boolean;
    /**
     * Export custom routes flag value for peering from producer to consumer.
     */
    producerExportCustomRoutes?: boolean;
    /**
     * Export subnet routes with public ip flag value for peering from producer to consumer.
     */
    producerExportSubnetRoutesWithPublicIp?: boolean;
    /**
     * Import custom routes flag value for peering from producer to consumer.
     */
    producerImportCustomRoutes?: boolean;
    /**
     * Import subnet routes with public ip flag value for peering from producer to consumer.
     */
    producerImportSubnetRoutesWithPublicIp?: boolean;
    /**
     * Output only. The VPC host network that is used to host managed service instances. In the format, projects/{project}/global/networks/{network} where {project} is the project number e.g. '12345' and {network} is the network name.
     */
    producerNetwork?: string;
    /**
     * Output only. The reserved ranges associated with this private service access connection.
     */
    reservedRanges?: GoogleCloudServicenetworkingV1ConsumerConfigReservedRange[];
    /**
     * Output only. The IP ranges already in use by consumer or producer
     */
    usedIpRanges?: string[];
    /**
     * Output only. Indicates whether the VPC Service Controls reference architecture is configured for the producer VPC host network.
     */
    vpcScReferenceArchitectureEnabled?: boolean;
}
