package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecordingAddOnResultPayloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListRecordingAddOnResultPayloadPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AddOnResultSid")
    public String addOnResultSid;
    public ListRecordingAddOnResultPayloadPathParams withAddOnResultSid(String addOnResultSid) {
        this.addOnResultSid = addOnResultSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReferenceSid")
    public String referenceSid;
    public ListRecordingAddOnResultPayloadPathParams withReferenceSid(String referenceSid) {
        this.referenceSid = referenceSid;
        return this;
    }
}