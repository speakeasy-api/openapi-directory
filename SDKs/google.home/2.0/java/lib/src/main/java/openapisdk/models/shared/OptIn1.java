package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OptIn1 {
    @JsonProperty("opencast")
    public Boolean opencast;
    public OptIn1 withOpencast(Boolean opencast) {
        this.opencast = opencast;
        return this;
    }
    @JsonProperty("preview_channel")
    public Boolean previewChannel;
    public OptIn1 withPreviewChannel(Boolean previewChannel) {
        this.previewChannel = previewChannel;
        return this;
    }
    @JsonProperty("remote_ducking")
    public Boolean remoteDucking;
    public OptIn1 withRemoteDucking(Boolean remoteDucking) {
        this.remoteDucking = remoteDucking;
        return this;
    }
    @JsonProperty("stats")
    public Boolean stats;
    public OptIn1 withStats(Boolean stats) {
        this.stats = stats;
        return this;
    }
}