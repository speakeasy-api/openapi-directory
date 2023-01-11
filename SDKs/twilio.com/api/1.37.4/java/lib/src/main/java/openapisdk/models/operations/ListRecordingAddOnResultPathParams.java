package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecordingAddOnResultPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListRecordingAddOnResultPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReferenceSid")
    public String referenceSid;
    public ListRecordingAddOnResultPathParams withReferenceSid(String referenceSid) {
        this.referenceSid = referenceSid;
        return this;
    }
}