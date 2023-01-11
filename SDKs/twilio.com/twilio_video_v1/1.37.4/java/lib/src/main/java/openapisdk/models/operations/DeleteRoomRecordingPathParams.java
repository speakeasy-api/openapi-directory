package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRoomRecordingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public DeleteRoomRecordingPathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteRoomRecordingPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}