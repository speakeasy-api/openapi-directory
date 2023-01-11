package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody4VideoMessenger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public SendMessageRequestBody4VideoMessengerCategoryEnum category;
    public SendMessageRequestBody4VideoMessenger withCategory(SendMessageRequestBody4VideoMessengerCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public SendMessageRequestBody4VideoMessenger withTag(String tag) {
        this.tag = tag;
        return this;
    }
}