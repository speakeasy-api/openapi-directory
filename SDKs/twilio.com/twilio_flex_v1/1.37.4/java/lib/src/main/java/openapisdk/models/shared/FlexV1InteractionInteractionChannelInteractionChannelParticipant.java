package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FlexV1InteractionInteractionChannelInteractionChannelParticipant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_sid")
    public String channelSid;
    public FlexV1InteractionInteractionChannelInteractionChannelParticipant withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interaction_sid")
    public String interactionSid;
    public FlexV1InteractionInteractionChannelInteractionChannelParticipant withInteractionSid(String interactionSid) {
        this.interactionSid = interactionSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public FlexV1InteractionInteractionChannelInteractionChannelParticipant withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public InteractionChannelParticipantEnumTypeEnum type;
    public FlexV1InteractionInteractionChannelInteractionChannelParticipant withType(InteractionChannelParticipantEnumTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public FlexV1InteractionInteractionChannelInteractionChannelParticipant withUrl(String url) {
        this.url = url;
        return this;
    }
}