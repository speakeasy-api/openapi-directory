package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRoomParticipantSubscribeRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ParticipantSid")
    public String participantSid;
    public FetchRoomParticipantSubscribeRulePathParams withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public FetchRoomParticipantSubscribeRulePathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
}