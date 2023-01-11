package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public UpdateMemberPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public UpdateMemberPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=QueueSid")
    public String queueSid;
    public UpdateMemberPathParams withQueueSid(String queueSid) {
        this.queueSid = queueSid;
        return this;
    }
}