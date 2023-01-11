package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInteractionChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InteractionSid")
    public String interactionSid;
    public UpdateInteractionChannelPathParams withInteractionSid(String interactionSid) {
        this.interactionSid = interactionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateInteractionChannelPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}