package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RoutesConfigDump
 * Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.
**/
public class RoutesConfigDump {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicRouteConfigs")
    public DynamicRouteConfig[] dynamicRouteConfigs;
    public RoutesConfigDump withDynamicRouteConfigs(DynamicRouteConfig[] dynamicRouteConfigs) {
        this.dynamicRouteConfigs = dynamicRouteConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticRouteConfigs")
    public StaticRouteConfig[] staticRouteConfigs;
    public RoutesConfigDump withStaticRouteConfigs(StaticRouteConfig[] staticRouteConfigs) {
        this.staticRouteConfigs = staticRouteConfigs;
        return this;
    }
}