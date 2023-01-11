package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUserChannelListUserChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public openapisdk.models.shared.ChatV2ServiceUserUserChannel[] channels;
    public ListUserChannelListUserChannelResponse withChannels(openapisdk.models.shared.ChatV2ServiceUserUserChannel[] channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUserChannelListUserChannelResponseMeta meta;
    public ListUserChannelListUserChannelResponse withMeta(ListUserChannelListUserChannelResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}