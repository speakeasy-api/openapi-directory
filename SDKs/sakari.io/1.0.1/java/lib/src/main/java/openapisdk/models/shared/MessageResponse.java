package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MessageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Message data;
    public MessageResponse withData(Message data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public MessageResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}