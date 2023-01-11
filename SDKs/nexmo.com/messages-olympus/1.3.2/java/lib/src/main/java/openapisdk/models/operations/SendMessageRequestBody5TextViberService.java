package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody5TextViberService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public SendMessageRequestBody5TextViberServiceCategoryEnum category;
    public SendMessageRequestBody5TextViberService withCategory(SendMessageRequestBody5TextViberServiceCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public SendMessageRequestBody5TextViberService withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SendMessageRequestBody5TextViberService withType(String type) {
        this.type = type;
        return this;
    }
}