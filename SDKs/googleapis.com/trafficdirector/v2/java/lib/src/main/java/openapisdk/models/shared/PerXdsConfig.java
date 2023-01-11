package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PerXdsConfig
 * Detailed config (per xDS) with status. [#next-free-field: 6]
**/
public class PerXdsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterConfig")
    public ClustersConfigDump clusterConfig;
    public PerXdsConfig withClusterConfig(ClustersConfigDump clusterConfig) {
        this.clusterConfig = clusterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listenerConfig")
    public ListenersConfigDump listenerConfig;
    public PerXdsConfig withListenerConfig(ListenersConfigDump listenerConfig) {
        this.listenerConfig = listenerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeConfig")
    public RoutesConfigDump routeConfig;
    public PerXdsConfig withRouteConfig(RoutesConfigDump routeConfig) {
        this.routeConfig = routeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopedRouteConfig")
    public ScopedRoutesConfigDump scopedRouteConfig;
    public PerXdsConfig withScopedRouteConfig(ScopedRoutesConfigDump scopedRouteConfig) {
        this.scopedRouteConfig = scopedRouteConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PerXdsConfigStatusEnum status;
    public PerXdsConfig withStatus(PerXdsConfigStatusEnum status) {
        this.status = status;
        return this;
    }
}