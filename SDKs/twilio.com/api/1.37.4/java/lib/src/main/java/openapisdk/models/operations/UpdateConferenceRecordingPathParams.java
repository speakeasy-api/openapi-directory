package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConferenceRecordingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public UpdateConferenceRecordingPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConferenceSid")
    public String conferenceSid;
    public UpdateConferenceRecordingPathParams withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateConferenceRecordingPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}