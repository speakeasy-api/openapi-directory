package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchMediaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchMediaPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MessageSid")
    public String messageSid;
    public FetchMediaPathParams withMessageSid(String messageSid) {
        this.messageSid = messageSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchMediaPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}