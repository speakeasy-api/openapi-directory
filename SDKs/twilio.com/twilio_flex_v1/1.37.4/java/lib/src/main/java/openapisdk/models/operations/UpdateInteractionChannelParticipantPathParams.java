package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInteractionChannelParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChannelSid")
    public String channelSid;
    public UpdateInteractionChannelParticipantPathParams withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InteractionSid")
    public String interactionSid;
    public UpdateInteractionChannelParticipantPathParams withInteractionSid(String interactionSid) {
        this.interactionSid = interactionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateInteractionChannelParticipantPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}