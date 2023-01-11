package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigVariable
 * ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.
**/
public class ConfigVariable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boolValue")
    public Boolean boolValue;
    public ConfigVariable withBoolValue(Boolean boolValue) {
        this.boolValue = boolValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intValue")
    public String intValue;
    public ConfigVariable withIntValue(String intValue) {
        this.intValue = intValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ConfigVariable withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretValue")
    public Secret secretValue;
    public ConfigVariable withSecretValue(Secret secretValue) {
        this.secretValue = secretValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public ConfigVariable withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}