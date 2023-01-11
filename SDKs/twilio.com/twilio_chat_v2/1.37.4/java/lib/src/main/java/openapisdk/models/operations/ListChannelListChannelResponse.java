package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListChannelListChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public openapisdk.models.shared.ChatV2ServiceChannel[] channels;
    public ListChannelListChannelResponse withChannels(openapisdk.models.shared.ChatV2ServiceChannel[] channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListChannelListChannelResponseMeta meta;
    public ListChannelListChannelResponse withMeta(ListChannelListChannelResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}