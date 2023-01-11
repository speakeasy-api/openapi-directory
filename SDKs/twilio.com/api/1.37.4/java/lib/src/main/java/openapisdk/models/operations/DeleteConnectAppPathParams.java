package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConnectAppPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteConnectAppPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteConnectAppPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}