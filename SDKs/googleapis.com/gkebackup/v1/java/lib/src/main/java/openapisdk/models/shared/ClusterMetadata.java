package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClusterMetadata
 * Information about the GKE cluster from which this Backup was created.
**/
public class ClusterMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anthosVersion")
    public String anthosVersion;
    public ClusterMetadata withAnthosVersion(String anthosVersion) {
        this.anthosVersion = anthosVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupCrdVersions")
    public java.util.Map<String, String> backupCrdVersions;
    public ClusterMetadata withBackupCrdVersions(java.util.Map<String, String> backupCrdVersions) {
        this.backupCrdVersions = backupCrdVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public ClusterMetadata withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeVersion")
    public String gkeVersion;
    public ClusterMetadata withGkeVersion(String gkeVersion) {
        this.gkeVersion = gkeVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("k8sVersion")
    public String k8sVersion;
    public ClusterMetadata withK8sVersion(String k8sVersion) {
        this.k8sVersion = k8sVersion;
        return this;
    }
}