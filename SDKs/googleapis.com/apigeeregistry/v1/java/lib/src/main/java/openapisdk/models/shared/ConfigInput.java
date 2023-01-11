package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigInput
 * Available configurations to provision an Instance.
**/
public class ConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmekKeyName")
    public String cmekKeyName;
    public ConfigInput withCmekKeyName(String cmekKeyName) {
        this.cmekKeyName = cmekKeyName;
        return this;
    }
}