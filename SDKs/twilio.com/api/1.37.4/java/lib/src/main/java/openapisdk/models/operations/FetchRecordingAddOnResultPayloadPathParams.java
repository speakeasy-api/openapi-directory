package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRecordingAddOnResultPayloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchRecordingAddOnResultPayloadPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AddOnResultSid")
    public String addOnResultSid;
    public FetchRecordingAddOnResultPayloadPathParams withAddOnResultSid(String addOnResultSid) {
        this.addOnResultSid = addOnResultSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReferenceSid")
    public String referenceSid;
    public FetchRecordingAddOnResultPayloadPathParams withReferenceSid(String referenceSid) {
        this.referenceSid = referenceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchRecordingAddOnResultPayloadPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}