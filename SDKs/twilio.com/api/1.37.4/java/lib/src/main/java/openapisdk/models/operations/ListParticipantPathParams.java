package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListParticipantPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConferenceSid")
    public String conferenceSid;
    public ListParticipantPathParams withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
}