package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvironmentVariable
 * A key-value pair passed as an environment variable to the test.
**/
public class EnvironmentVariable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public EnvironmentVariable withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public EnvironmentVariable withValue(String value) {
        this.value = value;
        return this;
    }
}