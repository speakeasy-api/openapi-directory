package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInteractionChannelParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChannelSid")
    public String channelSid;
    public CreateInteractionChannelParticipantPathParams withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InteractionSid")
    public String interactionSid;
    public CreateInteractionChannelParticipantPathParams withInteractionSid(String interactionSid) {
        this.interactionSid = interactionSid;
        return this;
    }
}