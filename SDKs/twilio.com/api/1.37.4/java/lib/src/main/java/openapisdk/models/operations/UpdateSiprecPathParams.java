package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSiprecPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public UpdateSiprecPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public UpdateSiprecPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateSiprecPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}