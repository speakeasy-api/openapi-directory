package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWorkerChannelListWorkerChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerChannel[] channels;
    public ListWorkerChannelListWorkerChannelResponse withChannels(openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerChannel[] channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListWorkerChannelListWorkerChannelResponseMeta meta;
    public ListWorkerChannelListWorkerChannelResponse withMeta(ListWorkerChannelListWorkerChannelResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}