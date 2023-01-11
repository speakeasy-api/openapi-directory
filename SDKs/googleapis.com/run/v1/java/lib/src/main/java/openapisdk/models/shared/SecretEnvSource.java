package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecretEnvSource
 * Not supported by Cloud Run. SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
**/
public class SecretEnvSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localObjectReference")
    public LocalObjectReference localObjectReference;
    public SecretEnvSource withLocalObjectReference(LocalObjectReference localObjectReference) {
        this.localObjectReference = localObjectReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SecretEnvSource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optional")
    public Boolean optional;
    public SecretEnvSource withOptional(Boolean optional) {
        this.optional = optional;
        return this;
    }
}