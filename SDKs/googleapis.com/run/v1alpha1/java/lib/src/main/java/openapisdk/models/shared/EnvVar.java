package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvVar
 * EnvVar represents an environment variable present in a Container.
**/
public class EnvVar {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EnvVar withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public EnvVar withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueFrom")
    public EnvVarSource valueFrom;
    public EnvVar withValueFrom(EnvVarSource valueFrom) {
        this.valueFrom = valueFrom;
        return this;
    }
}