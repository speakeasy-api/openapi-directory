package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchInteractionChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InteractionSid")
    public String interactionSid;
    public FetchInteractionChannelPathParams withInteractionSid(String interactionSid) {
        this.interactionSid = interactionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchInteractionChannelPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}