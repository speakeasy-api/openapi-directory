package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody4TextMessenger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public SendMessageRequestBody4TextMessengerCategoryEnum category;
    public SendMessageRequestBody4TextMessenger withCategory(SendMessageRequestBody4TextMessengerCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public SendMessageRequestBody4TextMessenger withTag(String tag) {
        this.tag = tag;
        return this;
    }
}