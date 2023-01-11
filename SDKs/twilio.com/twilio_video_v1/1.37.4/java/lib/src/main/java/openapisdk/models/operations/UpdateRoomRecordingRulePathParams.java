package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomRecordingRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public UpdateRoomRecordingRulePathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
}