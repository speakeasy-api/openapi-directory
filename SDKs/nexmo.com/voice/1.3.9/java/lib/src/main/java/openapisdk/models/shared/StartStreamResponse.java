package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartStreamResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public StartStreamResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public StartStreamResponse withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}