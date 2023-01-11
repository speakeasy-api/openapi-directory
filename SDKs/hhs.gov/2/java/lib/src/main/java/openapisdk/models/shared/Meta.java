package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Meta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public Message[] messages;
    public Meta withMessages(Message[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public Pagination pagination;
    public Meta withPagination(Pagination pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public Meta withStatus(Long status) {
        this.status = status;
        return this;
    }
}