package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest {
    @SpeakeasyMetadata("form:name=MediaProperties")
    public Object mediaProperties;
    public CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest withMediaProperties(Object mediaProperties) {
        this.mediaProperties = mediaProperties;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public openapisdk.models.shared.InteractionChannelParticipantEnumTypeEnum type;
    public CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest withType(openapisdk.models.shared.InteractionChannelParticipantEnumTypeEnum type) {
        this.type = type;
        return this;
    }
}