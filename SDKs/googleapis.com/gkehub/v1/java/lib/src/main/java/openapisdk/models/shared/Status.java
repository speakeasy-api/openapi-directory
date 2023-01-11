package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Status
 * Status specifies state for the subcomponent.
**/
public class Status {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public StatusCodeEnum code;
    public Status withCode(StatusCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Status withDescription(String description) {
        this.description = description;
        return this;
    }
}