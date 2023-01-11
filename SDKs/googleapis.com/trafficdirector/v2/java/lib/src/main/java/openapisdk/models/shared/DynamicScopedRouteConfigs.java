package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DynamicScopedRouteConfigs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public DynamicScopedRouteConfigs withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DynamicScopedRouteConfigs withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopedRouteConfigs")
    public java.util.Map<String, Object>[] scopedRouteConfigs;
    public DynamicScopedRouteConfigs withScopedRouteConfigs(java.util.Map<String, Object>[] scopedRouteConfigs) {
        this.scopedRouteConfigs = scopedRouteConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionInfo")
    public String versionInfo;
    public DynamicScopedRouteConfigs withVersionInfo(String versionInfo) {
        this.versionInfo = versionInfo;
        return this;
    }
}