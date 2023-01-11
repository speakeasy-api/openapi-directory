package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRoomParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public FetchRoomParticipantPathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchRoomParticipantPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}