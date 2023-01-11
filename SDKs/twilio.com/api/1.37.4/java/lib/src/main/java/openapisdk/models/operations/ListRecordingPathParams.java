package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecordingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListRecordingPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}