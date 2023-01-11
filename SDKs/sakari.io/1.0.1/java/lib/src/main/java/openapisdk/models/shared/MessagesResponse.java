package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MessagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Message[] data;
    public MessagesResponse withData(Message[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public MessagesResponseError error;
    public MessagesResponse withError(MessagesResponseError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public MessagesResponsePagination pagination;
    public MessagesResponse withPagination(MessagesResponsePagination pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public MessagesResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}