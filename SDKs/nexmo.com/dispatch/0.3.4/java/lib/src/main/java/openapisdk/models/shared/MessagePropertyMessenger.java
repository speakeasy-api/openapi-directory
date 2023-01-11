package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MessagePropertyMessenger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public MessagePropertyMessengerCategoryEnum category;
    public MessagePropertyMessenger withCategory(MessagePropertyMessengerCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public MessagePropertyMessenger withTag(String tag) {
        this.tag = tag;
        return this;
    }
}