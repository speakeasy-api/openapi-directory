package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchCallFeedbackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchCallFeedbackPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public FetchCallFeedbackPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
}