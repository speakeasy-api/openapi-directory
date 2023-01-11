package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInteractionCreateInteractionRequest {
    @SpeakeasyMetadata("form:name=Channel")
    public Object channel;
    public CreateInteractionCreateInteractionRequest withChannel(Object channel) {
        this.channel = channel;
        return this;
    }
    @SpeakeasyMetadata("form:name=Routing")
    public Object routing;
    public CreateInteractionCreateInteractionRequest withRouting(Object routing) {
        this.routing = routing;
        return this;
    }
}