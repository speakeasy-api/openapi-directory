package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchMemberPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public FetchMemberPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=QueueSid")
    public String queueSid;
    public FetchMemberPathParams withQueueSid(String queueSid) {
        this.queueSid = queueSid;
        return this;
    }
}