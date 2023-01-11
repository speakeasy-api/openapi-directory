package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObError1 {
    @JsonProperty("ErrorCode")
    public ErrorCodeEnum errorCode;
    public ObError1 withErrorCode(ErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonProperty("Message")
    public String message;
    public ObError1 withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Path")
    public String path;
    public ObError1 withPath(String path) {
        this.path = path;
        return this;
    }
}