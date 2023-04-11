import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfig, ClusterConfigInput } from "./clusterconfig";
import { ClusterMetrics } from "./clustermetrics";
import { ClusterStatus } from "./clusterstatus";
import { VirtualClusterConfig } from "./virtualclusterconfig";
/**
 * Describes the identifying information, config, and status of a Dataproc cluster
 */
export declare class ClusterInput extends SpeakeasyBase {
    /**
     * Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.
     */
    clusterName?: string;
    /**
     * The cluster config.
     */
    config?: ClusterConfigInput;
    /**
     * Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
     */
    labels?: Record<string, string>;
    /**
     * Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
     */
    metrics?: ClusterMetrics;
    /**
     * Required. The Google Cloud Platform project ID that the cluster belongs to.
     */
    projectId?: string;
    /**
     * The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview).
     */
    virtualClusterConfig?: VirtualClusterConfig;
}
/**
 * Describes the identifying information, config, and status of a Dataproc cluster
 */
export declare class Cluster extends SpeakeasyBase {
    /**
     * Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.
     */
    clusterName?: string;
    /**
     * Output only. A cluster UUID (Unique Universal Identifier). Dataproc generates this value when it creates the cluster.
     */
    clusterUuid?: string;
    /**
     * The cluster config.
     */
    config?: ClusterConfig;
    /**
     * Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
     */
    labels?: Record<string, string>;
    /**
     * Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
     */
    metrics?: ClusterMetrics;
    /**
     * Required. The Google Cloud Platform project ID that the cluster belongs to.
     */
    projectId?: string;
    /**
     * The status of a cluster and its instances.
     */
    status?: ClusterStatus;
    /**
     * Output only. The previous cluster status.
     */
    statusHistory?: ClusterStatus[];
    /**
     * The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview).
     */
    virtualClusterConfig?: VirtualClusterConfig;
}
