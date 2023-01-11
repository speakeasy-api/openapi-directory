package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartTalkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public StartTalkResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public StartTalkResponse withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}