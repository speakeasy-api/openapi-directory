package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FlexV1InteractionInteractionChannelInteractionChannelInvite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_sid")
    public String channelSid;
    public FlexV1InteractionInteractionChannelInteractionChannelInvite withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interaction_sid")
    public String interactionSid;
    public FlexV1InteractionInteractionChannelInteractionChannelInvite withInteractionSid(String interactionSid) {
        this.interactionSid = interactionSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routing")
    public Object routing;
    public FlexV1InteractionInteractionChannelInteractionChannelInvite withRouting(Object routing) {
        this.routing = routing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public FlexV1InteractionInteractionChannelInteractionChannelInvite withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public FlexV1InteractionInteractionChannelInteractionChannelInvite withUrl(String url) {
        this.url = url;
        return this;
    }
}