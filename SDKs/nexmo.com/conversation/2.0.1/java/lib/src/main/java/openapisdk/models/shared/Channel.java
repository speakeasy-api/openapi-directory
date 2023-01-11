package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Channel
 * A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
**/
public class Channel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public Object from;
    public Channel withFrom(Object from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leg_id")
    public String legId;
    public Channel withLegId(String legId) {
        this.legId = legId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leg_ids")
    public Object[] legIds;
    public Channel withLegIds(Object[] legIds) {
        this.legIds = legIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public Object to;
    public Channel withTo(Object to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ChannelTypeEnum type;
    public Channel withType(ChannelTypeEnum type) {
        this.type = type;
        return this;
    }
}