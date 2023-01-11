package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody4FileMessenger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public SendMessageRequestBody4FileMessengerCategoryEnum category;
    public SendMessageRequestBody4FileMessenger withCategory(SendMessageRequestBody4FileMessengerCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public SendMessageRequestBody4FileMessenger withTag(String tag) {
        this.tag = tag;
        return this;
    }
}