package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamicCluster
 * Describes a dynamically loaded cluster via the CDS API.
**/
public class DynamicCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public java.util.Map<String, Object> cluster;
    public DynamicCluster withCluster(java.util.Map<String, Object> cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public DynamicCluster withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionInfo")
    public String versionInfo;
    public DynamicCluster withVersionInfo(String versionInfo) {
        this.versionInfo = versionInfo;
        return this;
    }
}