package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public UpdateQueuePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateQueuePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}