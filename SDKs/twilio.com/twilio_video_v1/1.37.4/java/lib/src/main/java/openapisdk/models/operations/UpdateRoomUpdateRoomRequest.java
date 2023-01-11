package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomUpdateRoomRequest {
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.RoomEnumRoomStatusEnum status;
    public UpdateRoomUpdateRoomRequest withStatus(openapisdk.models.shared.RoomEnumRoomStatusEnum status) {
        this.status = status;
        return this;
    }
}