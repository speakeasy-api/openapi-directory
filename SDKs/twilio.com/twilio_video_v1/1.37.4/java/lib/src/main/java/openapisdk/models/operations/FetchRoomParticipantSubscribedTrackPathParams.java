package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRoomParticipantSubscribedTrackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ParticipantSid")
    public String participantSid;
    public FetchRoomParticipantSubscribedTrackPathParams withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public FetchRoomParticipantSubscribedTrackPathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchRoomParticipantSubscribedTrackPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}