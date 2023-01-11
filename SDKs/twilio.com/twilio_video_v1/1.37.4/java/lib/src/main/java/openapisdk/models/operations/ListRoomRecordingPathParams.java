package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRoomRecordingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public ListRoomRecordingPathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
}