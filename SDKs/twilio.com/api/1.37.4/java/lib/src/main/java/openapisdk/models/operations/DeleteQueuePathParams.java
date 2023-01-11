package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteQueuePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteQueuePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}