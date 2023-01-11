package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMessageListMessageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public openapisdk.models.shared.IpMessagingV2ServiceChannelMessage[] messages;
    public ListMessageListMessageResponse withMessages(openapisdk.models.shared.IpMessagingV2ServiceChannelMessage[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListMessageListMessageResponseMeta meta;
    public ListMessageListMessageResponse withMeta(ListMessageListMessageResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}