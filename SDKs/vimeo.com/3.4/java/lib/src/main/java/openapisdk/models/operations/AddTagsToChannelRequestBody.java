package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddTagsToChannelRequestBody {
    @JsonProperty("tag")
    public String[] tag;
    public AddTagsToChannelRequestBody withTag(String[] tag) {
        this.tag = tag;
        return this;
    }
}