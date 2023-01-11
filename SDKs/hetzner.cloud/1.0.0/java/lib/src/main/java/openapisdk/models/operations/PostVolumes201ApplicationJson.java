package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumes201ApplicationJson {
    @JsonProperty("action")
    public PostVolumes201ApplicationJsonAction action;
    public PostVolumes201ApplicationJson withAction(PostVolumes201ApplicationJsonAction action) {
        this.action = action;
        return this;
    }
    @JsonProperty("next_actions")
    public PostVolumes201ApplicationJsonAction[] nextActions;
    public PostVolumes201ApplicationJson withNextActions(PostVolumes201ApplicationJsonAction[] nextActions) {
        this.nextActions = nextActions;
        return this;
    }
    @JsonProperty("volume")
    public PostVolumes201ApplicationJsonVolume volume;
    public PostVolumes201ApplicationJson withVolume(PostVolumes201ApplicationJsonVolume volume) {
        this.volume = volume;
        return this;
    }
}