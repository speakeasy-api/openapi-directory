package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteAddressPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteAddressPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}