package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchMessageInteractionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ParticipantSid")
    public String participantSid;
    public FetchMessageInteractionPathParams withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchMessageInteractionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SessionSid")
    public String sessionSid;
    public FetchMessageInteractionPathParams withSessionSid(String sessionSid) {
        this.sessionSid = sessionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchMessageInteractionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}