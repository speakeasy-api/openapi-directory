package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody4AudioMessenger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public SendMessageRequestBody4AudioMessengerCategoryEnum category;
    public SendMessageRequestBody4AudioMessenger withCategory(SendMessageRequestBody4AudioMessengerCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public SendMessageRequestBody4AudioMessenger withTag(String tag) {
        this.tag = tag;
        return this;
    }
}