package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StaticCluster
 * Describes a statically loaded cluster.
**/
public class StaticCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public java.util.Map<String, Object> cluster;
    public StaticCluster withCluster(java.util.Map<String, Object> cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public StaticCluster withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
}