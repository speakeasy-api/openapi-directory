package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvironmentVariable
 * EnvironmentVariable is a name-value pair to store environment variables for Process.
**/
public class EnvironmentVariable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EnvironmentVariable withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("val")
    public String val;
    public EnvironmentVariable withVal(String val) {
        this.val = val;
        return this;
    }
}