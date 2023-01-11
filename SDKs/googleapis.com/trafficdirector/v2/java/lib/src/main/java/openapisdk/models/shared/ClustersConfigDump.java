package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClustersConfigDump
 * Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.
**/
public class ClustersConfigDump {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicActiveClusters")
    public DynamicCluster[] dynamicActiveClusters;
    public ClustersConfigDump withDynamicActiveClusters(DynamicCluster[] dynamicActiveClusters) {
        this.dynamicActiveClusters = dynamicActiveClusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicWarmingClusters")
    public DynamicCluster[] dynamicWarmingClusters;
    public ClustersConfigDump withDynamicWarmingClusters(DynamicCluster[] dynamicWarmingClusters) {
        this.dynamicWarmingClusters = dynamicWarmingClusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticClusters")
    public StaticCluster[] staticClusters;
    public ClustersConfigDump withStaticClusters(StaticCluster[] staticClusters) {
        this.staticClusters = staticClusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionInfo")
    public String versionInfo;
    public ClustersConfigDump withVersionInfo(String versionInfo) {
        this.versionInfo = versionInfo;
        return this;
    }
}