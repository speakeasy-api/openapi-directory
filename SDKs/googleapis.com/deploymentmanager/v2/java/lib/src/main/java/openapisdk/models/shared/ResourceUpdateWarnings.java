package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResourceUpdateWarnings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ResourceUpdateWarningsCodeEnum code;
    public ResourceUpdateWarnings withCode(ResourceUpdateWarningsCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceUpdateWarningsData[] data;
    public ResourceUpdateWarnings withData(ResourceUpdateWarningsData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ResourceUpdateWarnings withMessage(String message) {
        this.message = message;
        return this;
    }
}