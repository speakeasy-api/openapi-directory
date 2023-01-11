package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVideoParticipantSummaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public ListVideoParticipantSummaryPathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
}