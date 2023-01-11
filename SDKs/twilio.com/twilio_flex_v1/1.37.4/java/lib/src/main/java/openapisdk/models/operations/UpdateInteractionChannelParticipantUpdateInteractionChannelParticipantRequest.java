package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest {
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.InteractionChannelParticipantEnumStatusEnum status;
    public UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest withStatus(openapisdk.models.shared.InteractionChannelParticipantEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}