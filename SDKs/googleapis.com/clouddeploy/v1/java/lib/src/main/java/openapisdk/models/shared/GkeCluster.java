package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GkeCluster
 * Information specifying a GKE Cluster.
**/
public class GkeCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public GkeCluster withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalIp")
    public Boolean internalIp;
    public GkeCluster withInternalIp(Boolean internalIp) {
        this.internalIp = internalIp;
        return this;
    }
}