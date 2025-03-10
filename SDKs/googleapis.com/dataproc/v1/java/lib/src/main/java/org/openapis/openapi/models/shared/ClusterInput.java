/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ClusterInput - Describes the identifying information, config, and status of a Dataproc cluster
 */
public class ClusterInput {
    /**
     * Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;

    public ClusterInput withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    
    /**
     * The cluster config.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public ClusterConfigInput config;

    public ClusterInput withConfig(ClusterConfigInput config) {
        this.config = config;
        return this;
    }
    
    /**
     * Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;

    public ClusterInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    
    /**
     * Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public ClusterMetrics metrics;

    public ClusterInput withMetrics(ClusterMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    
    /**
     * Required. The Google Cloud Platform project ID that the cluster belongs to.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;

    public ClusterInput withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    
    /**
     * The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualClusterConfig")
    public VirtualClusterConfig virtualClusterConfig;

    public ClusterInput withVirtualClusterConfig(VirtualClusterConfig virtualClusterConfig) {
        this.virtualClusterConfig = virtualClusterConfig;
        return this;
    }
    
    public ClusterInput(){}
}
