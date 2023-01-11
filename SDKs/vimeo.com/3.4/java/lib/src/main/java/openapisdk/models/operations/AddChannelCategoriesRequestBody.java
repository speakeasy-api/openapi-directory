package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddChannelCategoriesRequestBody {
    @JsonProperty("channels")
    public String[] channels;
    public AddChannelCategoriesRequestBody withChannels(String[] channels) {
        this.channels = channels;
        return this;
    }
}