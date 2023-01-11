package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConversationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Conversation[] data;
    public ConversationsResponse withData(Conversation[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ConversationsResponseError error;
    public ConversationsResponse withError(ConversationsResponseError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public ConversationsResponsePagination pagination;
    public ConversationsResponse withPagination(ConversationsResponsePagination pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public ConversationsResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}