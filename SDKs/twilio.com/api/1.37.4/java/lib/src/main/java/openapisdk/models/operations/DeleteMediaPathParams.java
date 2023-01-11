package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMediaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteMediaPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MessageSid")
    public String messageSid;
    public DeleteMediaPathParams withMessageSid(String messageSid) {
        this.messageSid = messageSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteMediaPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}