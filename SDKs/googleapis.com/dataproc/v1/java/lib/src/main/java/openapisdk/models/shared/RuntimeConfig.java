package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeConfig
 * Runtime configuration for a workload.
**/
public class RuntimeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerImage")
    public String containerImage;
    public RuntimeConfig withContainerImage(String containerImage) {
        this.containerImage = containerImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public RuntimeConfig withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public RuntimeConfig withVersion(String version) {
        this.version = version;
        return this;
    }
}