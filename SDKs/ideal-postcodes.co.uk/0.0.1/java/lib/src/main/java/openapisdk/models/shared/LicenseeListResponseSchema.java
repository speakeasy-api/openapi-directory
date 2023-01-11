package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LicenseeListResponseSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Integer code;
    public LicenseeListResponseSchema withCode(Integer code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public LicenseeListResponseSchema withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public LicenseeListResult result;
    public LicenseeListResponseSchema withResult(LicenseeListResult result) {
        this.result = result;
        return this;
    }
}