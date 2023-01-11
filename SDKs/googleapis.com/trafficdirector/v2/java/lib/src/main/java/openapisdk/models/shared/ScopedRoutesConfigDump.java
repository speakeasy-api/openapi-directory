package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScopedRoutesConfigDump
 * Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API.
**/
public class ScopedRoutesConfigDump {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicScopedRouteConfigs")
    public DynamicScopedRouteConfigs[] dynamicScopedRouteConfigs;
    public ScopedRoutesConfigDump withDynamicScopedRouteConfigs(DynamicScopedRouteConfigs[] dynamicScopedRouteConfigs) {
        this.dynamicScopedRouteConfigs = dynamicScopedRouteConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlineScopedRouteConfigs")
    public InlineScopedRouteConfigs[] inlineScopedRouteConfigs;
    public ScopedRoutesConfigDump withInlineScopedRouteConfigs(InlineScopedRouteConfigs[] inlineScopedRouteConfigs) {
        this.inlineScopedRouteConfigs = inlineScopedRouteConfigs;
        return this;
    }
}