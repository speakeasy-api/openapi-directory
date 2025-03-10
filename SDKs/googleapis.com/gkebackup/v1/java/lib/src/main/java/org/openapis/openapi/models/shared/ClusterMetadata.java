/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ClusterMetadata - Information about the GKE cluster from which this Backup was created.
 */
public class ClusterMetadata {
    /**
     * Anthos version
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anthosVersion")
    public String anthosVersion;

    public ClusterMetadata withAnthosVersion(String anthosVersion) {
        this.anthosVersion = anthosVersion;
        return this;
    }
    
    /**
     * A list of the Backup for GKE CRD versions found in the cluster.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupCrdVersions")
    public java.util.Map<String, String> backupCrdVersions;

    public ClusterMetadata withBackupCrdVersions(java.util.Map<String, String> backupCrdVersions) {
        this.backupCrdVersions = backupCrdVersions;
        return this;
    }
    
    /**
     * The source cluster from which this Backup was created. Valid formats: - `projects/* /locations/* /clusters/*` - `projects/* /zones/* /clusters/*` This is inherited from the parent BackupPlan's cluster field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;

    public ClusterMetadata withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    
    /**
     * GKE version
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeVersion")
    public String gkeVersion;

    public ClusterMetadata withGkeVersion(String gkeVersion) {
        this.gkeVersion = gkeVersion;
        return this;
    }
    
    /**
     * The Kubernetes server version of the source cluster.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("k8sVersion")
    public String k8sVersion;

    public ClusterMetadata withK8sVersion(String k8sVersion) {
        this.k8sVersion = k8sVersion;
        return this;
    }
    
    public ClusterMetadata(){}
}
