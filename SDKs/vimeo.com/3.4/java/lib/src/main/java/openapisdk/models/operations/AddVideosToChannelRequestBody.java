package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddVideosToChannelRequestBody {
    @JsonProperty("video_uri")
    public String videoUri;
    public AddVideosToChannelRequestBody withVideoUri(String videoUri) {
        this.videoUri = videoUri;
        return this;
    }
}