package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInteractionChannelUpdateInteractionChannelRequest {
    @SpeakeasyMetadata("form:name=Routing")
    public Object routing;
    public UpdateInteractionChannelUpdateInteractionChannelRequest withRouting(Object routing) {
        this.routing = routing;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.InteractionChannelEnumStatusEnum status;
    public UpdateInteractionChannelUpdateInteractionChannelRequest withStatus(openapisdk.models.shared.InteractionChannelEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}