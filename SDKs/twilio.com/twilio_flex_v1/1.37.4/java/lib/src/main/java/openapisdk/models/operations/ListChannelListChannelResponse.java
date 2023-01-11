package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListChannelListChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flex_chat_channels")
    public openapisdk.models.shared.FlexV1Channel[] flexChatChannels;
    public ListChannelListChannelResponse withFlexChatChannels(openapisdk.models.shared.FlexV1Channel[] flexChatChannels) {
        this.flexChatChannels = flexChatChannels;
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