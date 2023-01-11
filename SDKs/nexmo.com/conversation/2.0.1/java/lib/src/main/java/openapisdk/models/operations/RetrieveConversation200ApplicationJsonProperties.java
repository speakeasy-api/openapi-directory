package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveConversation200ApplicationJsonProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video")
    public Boolean video;
    public RetrieveConversation200ApplicationJsonProperties withVideo(Boolean video) {
        this.video = video;
        return this;
    }
}