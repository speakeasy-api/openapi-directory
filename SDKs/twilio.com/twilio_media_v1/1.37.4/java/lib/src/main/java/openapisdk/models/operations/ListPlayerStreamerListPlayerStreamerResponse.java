package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPlayerStreamerListPlayerStreamerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListPlayerStreamerListPlayerStreamerResponseMeta meta;
    public ListPlayerStreamerListPlayerStreamerResponse withMeta(ListPlayerStreamerListPlayerStreamerResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("player_streamers")
    public openapisdk.models.shared.MediaV1PlayerStreamer[] playerStreamers;
    public ListPlayerStreamerListPlayerStreamerResponse withPlayerStreamers(openapisdk.models.shared.MediaV1PlayerStreamer[] playerStreamers) {
        this.playerStreamers = playerStreamers;
        return this;
    }
}