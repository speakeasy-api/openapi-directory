package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTaskChannelListTaskChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel[] channels;
    public ListTaskChannelListTaskChannelResponse withChannels(openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel[] channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListTaskChannelListTaskChannelResponseMeta meta;
    public ListTaskChannelListTaskChannelResponse withMeta(ListTaskChannelListTaskChannelResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}