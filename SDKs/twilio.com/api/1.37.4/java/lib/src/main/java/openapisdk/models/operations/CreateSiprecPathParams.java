package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSiprecPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateSiprecPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public CreateSiprecPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
}