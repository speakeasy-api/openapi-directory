package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInteractionChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InteractionSid")
    public String interactionSid;
    public ListInteractionChannelPathParams withInteractionSid(String interactionSid) {
        this.interactionSid = interactionSid;
        return this;
    }
}