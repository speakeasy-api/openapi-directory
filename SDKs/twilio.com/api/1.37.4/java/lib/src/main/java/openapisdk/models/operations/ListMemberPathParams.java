package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListMemberPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=QueueSid")
    public String queueSid;
    public ListMemberPathParams withQueueSid(String queueSid) {
        this.queueSid = queueSid;
        return this;
    }
}