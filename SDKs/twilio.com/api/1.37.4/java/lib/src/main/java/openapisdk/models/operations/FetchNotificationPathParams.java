package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchNotificationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchNotificationPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchNotificationPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}