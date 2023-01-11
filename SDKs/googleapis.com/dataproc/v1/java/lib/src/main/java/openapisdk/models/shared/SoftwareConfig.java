package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareConfig
 * Specifies the selection and config of software inside the cluster.
**/
public class SoftwareConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageVersion")
    public String imageVersion;
    public SoftwareConfig withImageVersion(String imageVersion) {
        this.imageVersion = imageVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optionalComponents")
    public SoftwareConfigOptionalComponentsEnum[] optionalComponents;
    public SoftwareConfig withOptionalComponents(SoftwareConfigOptionalComponentsEnum[] optionalComponents) {
        this.optionalComponents = optionalComponents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public SoftwareConfig withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
}