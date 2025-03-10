package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSipIpAccessControlListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchSipIpAccessControlListPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchSipIpAccessControlListPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}