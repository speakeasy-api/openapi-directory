package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomParticipantSubscribeRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ParticipantSid")
    public String participantSid;
    public UpdateRoomParticipantSubscribeRulePathParams withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public UpdateRoomParticipantSubscribeRulePathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
}