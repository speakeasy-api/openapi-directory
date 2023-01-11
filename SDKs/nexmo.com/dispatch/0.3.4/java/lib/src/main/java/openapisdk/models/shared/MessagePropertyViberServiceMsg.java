package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MessagePropertyViberServiceMsg {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public MessagePropertyViberServiceMsgCategoryEnum category;
    public MessagePropertyViberServiceMsg withCategory(MessagePropertyViberServiceMsgCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public MessagePropertyViberServiceMsg withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}