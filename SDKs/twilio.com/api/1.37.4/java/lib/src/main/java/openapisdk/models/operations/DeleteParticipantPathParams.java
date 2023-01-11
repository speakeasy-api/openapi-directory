package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteParticipantPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public DeleteParticipantPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConferenceSid")
    public String conferenceSid;
    public DeleteParticipantPathParams withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
}