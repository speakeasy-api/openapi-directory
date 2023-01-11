package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecretKeySelector
 * SecretKeySelector selects a key of a Secret.
**/
public class SecretKeySelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SecretKeySelector withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localObjectReference")
    public LocalObjectReference localObjectReference;
    public SecretKeySelector withLocalObjectReference(LocalObjectReference localObjectReference) {
        this.localObjectReference = localObjectReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SecretKeySelector withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optional")
    public Boolean optional;
    public SecretKeySelector withOptional(Boolean optional) {
        this.optional = optional;
        return this;
    }
}