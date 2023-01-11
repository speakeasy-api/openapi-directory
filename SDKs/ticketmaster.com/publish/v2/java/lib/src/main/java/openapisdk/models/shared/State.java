package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * State
 * State
**/
public class State {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public java.util.Map<String, String> names;
    public State withNames(java.util.Map<String, String> names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateCode")
    public String stateCode;
    public State withStateCode(String stateCode) {
        this.stateCode = stateCode;
        return this;
    }
}