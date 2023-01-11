package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody5ImageViberService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public SendMessageRequestBody5ImageViberServiceCategoryEnum category;
    public SendMessageRequestBody5ImageViberService withCategory(SendMessageRequestBody5ImageViberServiceCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public SendMessageRequestBody5ImageViberService withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SendMessageRequestBody5ImageViberService withType(String type) {
        this.type = type;
        return this;
    }
}