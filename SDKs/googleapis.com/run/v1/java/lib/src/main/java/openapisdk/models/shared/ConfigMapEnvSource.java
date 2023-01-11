package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigMapEnvSource
 * Not supported by Cloud Run. ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
**/
public class ConfigMapEnvSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localObjectReference")
    public LocalObjectReference localObjectReference;
    public ConfigMapEnvSource withLocalObjectReference(LocalObjectReference localObjectReference) {
        this.localObjectReference = localObjectReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConfigMapEnvSource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optional")
    public Boolean optional;
    public ConfigMapEnvSource withOptional(Boolean optional) {
        this.optional = optional;
        return this;
    }
}