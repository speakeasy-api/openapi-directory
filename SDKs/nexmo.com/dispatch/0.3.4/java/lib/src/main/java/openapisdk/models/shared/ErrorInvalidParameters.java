package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorInvalidParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ErrorInvalidParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public ErrorInvalidParameters withReason(String reason) {
        this.reason = reason;
        return this;
    }
}