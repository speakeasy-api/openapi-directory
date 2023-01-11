package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigMapKeySelector
 * Not supported by Cloud Run Selects a key from a ConfigMap.
**/
public class ConfigMapKeySelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ConfigMapKeySelector withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localObjectReference")
    public LocalObjectReference localObjectReference;
    public ConfigMapKeySelector withLocalObjectReference(LocalObjectReference localObjectReference) {
        this.localObjectReference = localObjectReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConfigMapKeySelector withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optional")
    public Boolean optional;
    public ConfigMapKeySelector withOptional(Boolean optional) {
        this.optional = optional;
        return this;
    }
}