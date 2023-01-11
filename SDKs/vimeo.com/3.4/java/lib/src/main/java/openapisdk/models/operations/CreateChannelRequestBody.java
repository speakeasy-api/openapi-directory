package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateChannelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateChannelRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public CreateChannelRequestBody withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateChannelRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("privacy")
    public CreateChannelRequestBodyPrivacyEnum privacy;
    public CreateChannelRequestBody withPrivacy(CreateChannelRequestBodyPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
}