package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRoomParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public ListRoomParticipantPathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
}