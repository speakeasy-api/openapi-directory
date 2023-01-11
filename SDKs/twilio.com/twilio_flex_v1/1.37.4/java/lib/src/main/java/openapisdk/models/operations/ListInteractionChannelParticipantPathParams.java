package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInteractionChannelParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChannelSid")
    public String channelSid;
    public ListInteractionChannelParticipantPathParams withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InteractionSid")
    public String interactionSid;
    public ListInteractionChannelParticipantPathParams withInteractionSid(String interactionSid) {
        this.interactionSid = interactionSid;
        return this;
    }
}