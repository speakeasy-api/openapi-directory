package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddChannelModeratorsRequestBody {
    @JsonProperty("user_uri")
    public String userUri;
    public AddChannelModeratorsRequestBody withUserUri(String userUri) {
        this.userUri = userUri;
        return this;
    }
}