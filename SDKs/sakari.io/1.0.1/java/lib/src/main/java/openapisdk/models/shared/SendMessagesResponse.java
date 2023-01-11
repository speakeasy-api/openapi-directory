package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public SendMessagesResponseData data;
    public SendMessagesResponse withData(SendMessagesResponseData data) {
        this.data = data;
        return this;
    }
}