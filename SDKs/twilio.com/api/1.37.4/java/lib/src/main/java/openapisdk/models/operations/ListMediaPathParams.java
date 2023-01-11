package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMediaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListMediaPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MessageSid")
    public String messageSid;
    public ListMediaPathParams withMessageSid(String messageSid) {
        this.messageSid = messageSid;
        return this;
    }
}