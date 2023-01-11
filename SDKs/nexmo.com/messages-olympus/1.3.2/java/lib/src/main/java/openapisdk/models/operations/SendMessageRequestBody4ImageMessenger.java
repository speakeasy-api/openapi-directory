package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody4ImageMessenger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public SendMessageRequestBody4ImageMessengerCategoryEnum category;
    public SendMessageRequestBody4ImageMessenger withCategory(SendMessageRequestBody4ImageMessengerCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public SendMessageRequestBody4ImageMessenger withTag(String tag) {
        this.tag = tag;
        return this;
    }
}