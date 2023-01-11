package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCallNotificationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListCallNotificationPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public ListCallNotificationPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
}