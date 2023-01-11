package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMessageInteractionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ParticipantSid")
    public String participantSid;
    public ListMessageInteractionPathParams withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListMessageInteractionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SessionSid")
    public String sessionSid;
    public ListMessageInteractionPathParams withSessionSid(String sessionSid) {
        this.sessionSid = sessionSid;
        return this;
    }
}