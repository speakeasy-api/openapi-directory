package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KubernetesSoftwareConfig
 * The software configuration for this Dataproc cluster running on Kubernetes.
**/
public class KubernetesSoftwareConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentVersion")
    public java.util.Map<String, String> componentVersion;
    public KubernetesSoftwareConfig withComponentVersion(java.util.Map<String, String> componentVersion) {
        this.componentVersion = componentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public KubernetesSoftwareConfig withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
}