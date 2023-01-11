import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfig } from "./clusterconfig";
import { ClusterMetrics } from "./clustermetrics";
import { ClusterStatus } from "./clusterstatus";
import { VirtualClusterConfig } from "./virtualclusterconfig";
import { ClusterConfigInput } from "./clusterconfig";
/**
 * Describes the identifying information, config, and status of a Dataproc cluster
**/
export declare class Cluster extends SpeakeasyBase {
    clusterName?: string;
    clusterUuid?: string;
    config?: ClusterConfig;
    labels?: Record<string, string>;
    metrics?: ClusterMetrics;
    projectId?: string;
    status?: ClusterStatus;
    statusHistory?: ClusterStatus[];
    virtualClusterConfig?: VirtualClusterConfig;
}
/**
 * Describes the identifying information, config, and status of a Dataproc cluster
**/
export declare class ClusterInput extends SpeakeasyBase {
    clusterName?: string;
    config?: ClusterConfigInput;
    labels?: Record<string, string>;
    metrics?: ClusterMetrics;
    projectId?: string;
    virtualClusterConfig?: VirtualClusterConfig;
}
