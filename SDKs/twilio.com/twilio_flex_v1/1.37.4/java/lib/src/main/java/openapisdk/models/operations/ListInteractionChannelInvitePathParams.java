package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInteractionChannelInvitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChannelSid")
    public String channelSid;
    public ListInteractionChannelInvitePathParams withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InteractionSid")
    public String interactionSid;
    public ListInteractionChannelInvitePathParams withInteractionSid(String interactionSid) {
        this.interactionSid = interactionSid;
        return this;
    }
}