package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLegs200ApplicationJsonEmbeddedLegs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public java.util.Map<String, Object> embedded;
    public ListLegs200ApplicationJsonEmbeddedLegs withEmbedded(java.util.Map<String, Object> embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, Object> links;
    public ListLegs200ApplicationJsonEmbeddedLegs withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_uuid")
    public String conversationUuid;
    public ListLegs200ApplicationJsonEmbeddedLegs withConversationUuid(String conversationUuid) {
        this.conversationUuid = conversationUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public java.util.Map<String, Object> from;
    public ListLegs200ApplicationJsonEmbeddedLegs withFrom(java.util.Map<String, Object> from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_end")
    public String startEnd;
    public ListLegs200ApplicationJsonEmbeddedLegs withStartEnd(String startEnd) {
        this.startEnd = startEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public String startTime;
    public ListLegs200ApplicationJsonEmbeddedLegs withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public openapisdk.models.shared.LegStateEnum state;
    public ListLegs200ApplicationJsonEmbeddedLegs withState(openapisdk.models.shared.LegStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public java.util.Map<String, Object> to;
    public ListLegs200ApplicationJsonEmbeddedLegs withTo(java.util.Map<String, Object> to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public openapisdk.models.shared.ChannelTypeEnum type;
    public ListLegs200ApplicationJsonEmbeddedLegs withType(openapisdk.models.shared.ChannelTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public ListLegs200ApplicationJsonEmbeddedLegs withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}