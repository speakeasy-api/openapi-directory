package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuxiliaryVersionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configOverrides")
    public java.util.Map<String, String> configOverrides;
    public AuxiliaryVersionConfig withConfigOverrides(java.util.Map<String, String> configOverrides) {
        this.configOverrides = configOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfig")
    public NetworkConfig networkConfig;
    public AuxiliaryVersionConfig withNetworkConfig(NetworkConfig networkConfig) {
        this.networkConfig = networkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public AuxiliaryVersionConfig withVersion(String version) {
        this.version = version;
        return this;
    }
}