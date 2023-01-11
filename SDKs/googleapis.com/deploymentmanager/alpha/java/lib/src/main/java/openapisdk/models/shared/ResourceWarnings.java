package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResourceWarnings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ResourceWarningsCodeEnum code;
    public ResourceWarnings withCode(ResourceWarningsCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceWarningsData[] data;
    public ResourceWarnings withData(ResourceWarningsData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ResourceWarnings withMessage(String message) {
        this.message = message;
        return this;
    }
}