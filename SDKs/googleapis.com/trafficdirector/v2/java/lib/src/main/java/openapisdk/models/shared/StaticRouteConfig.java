package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StaticRouteConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public StaticRouteConfig withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeConfig")
    public java.util.Map<String, Object> routeConfig;
    public StaticRouteConfig withRouteConfig(java.util.Map<String, Object> routeConfig) {
        this.routeConfig = routeConfig;
        return this;
    }
}