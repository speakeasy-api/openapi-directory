package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRecordingAddOnResultPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchRecordingAddOnResultPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReferenceSid")
    public String referenceSid;
    public FetchRecordingAddOnResultPathParams withReferenceSid(String referenceSid) {
        this.referenceSid = referenceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchRecordingAddOnResultPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}