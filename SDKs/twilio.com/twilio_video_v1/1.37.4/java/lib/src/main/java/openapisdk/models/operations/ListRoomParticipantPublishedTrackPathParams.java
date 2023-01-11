package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRoomParticipantPublishedTrackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ParticipantSid")
    public String participantSid;
    public ListRoomParticipantPublishedTrackPathParams withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public ListRoomParticipantPublishedTrackPathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
}