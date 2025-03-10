package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWebChannelListWebChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flex_chat_channels")
    public openapisdk.models.shared.FlexV1WebChannel[] flexChatChannels;
    public ListWebChannelListWebChannelResponse withFlexChatChannels(openapisdk.models.shared.FlexV1WebChannel[] flexChatChannels) {
        this.flexChatChannels = flexChatChannels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListWebChannelListWebChannelResponseMeta meta;
    public ListWebChannelListWebChannelResponse withMeta(ListWebChannelListWebChannelResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}