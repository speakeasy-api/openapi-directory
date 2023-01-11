package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchConferenceParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConferenceSid")
    public String conferenceSid;
    public FetchConferenceParticipantPathParams withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ParticipantSid")
    public String participantSid;
    public FetchConferenceParticipantPathParams withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
}