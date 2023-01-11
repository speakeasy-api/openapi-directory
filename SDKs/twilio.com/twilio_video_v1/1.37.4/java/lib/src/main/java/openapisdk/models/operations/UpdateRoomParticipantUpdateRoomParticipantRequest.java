package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomParticipantUpdateRoomParticipantRequest {
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.RoomParticipantEnumStatusEnum status;
    public UpdateRoomParticipantUpdateRoomParticipantRequest withStatus(openapisdk.models.shared.RoomParticipantEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}