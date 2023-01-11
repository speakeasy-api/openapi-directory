package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRoomParticipantPublishedTrackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ParticipantSid")
    public String participantSid;
    public FetchRoomParticipantPublishedTrackPathParams withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public FetchRoomParticipantPublishedTrackPathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchRoomParticipantPublishedTrackPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}