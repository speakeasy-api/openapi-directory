package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiWarning
 * An Admin API warning message.
**/
public class ApiWarning {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ApiWarningCodeEnum code;
    public ApiWarning withCode(ApiWarningCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ApiWarning withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public ApiWarning withRegion(String region) {
        this.region = region;
        return this;
    }
}