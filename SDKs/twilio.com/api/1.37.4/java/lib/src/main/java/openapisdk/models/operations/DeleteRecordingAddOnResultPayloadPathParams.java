package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRecordingAddOnResultPayloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteRecordingAddOnResultPayloadPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AddOnResultSid")
    public String addOnResultSid;
    public DeleteRecordingAddOnResultPayloadPathParams withAddOnResultSid(String addOnResultSid) {
        this.addOnResultSid = addOnResultSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReferenceSid")
    public String referenceSid;
    public DeleteRecordingAddOnResultPayloadPathParams withReferenceSid(String referenceSid) {
        this.referenceSid = referenceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteRecordingAddOnResultPayloadPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}