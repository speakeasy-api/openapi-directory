package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public UpdateRoomParticipantPathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateRoomParticipantPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}