package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCallEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListCallEventPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public ListCallEventPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
}