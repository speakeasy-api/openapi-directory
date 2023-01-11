package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConversationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public CreateConversationRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_url")
    public String imageUrl;
    public CreateConversationRequestBody withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateConversationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public openapisdk.models.shared.ConversationProperties properties;
    public CreateConversationRequestBody withProperties(openapisdk.models.shared.ConversationProperties properties) {
        this.properties = properties;
        return this;
    }
}