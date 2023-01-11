package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInteractionChannelListInteractionChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public openapisdk.models.shared.FlexV1InteractionInteractionChannel[] channels;
    public ListInteractionChannelListInteractionChannelResponse withChannels(openapisdk.models.shared.FlexV1InteractionInteractionChannel[] channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListInteractionChannelListInteractionChannelResponseMeta meta;
    public ListInteractionChannelListInteractionChannelResponse withMeta(ListInteractionChannelListInteractionChannelResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}