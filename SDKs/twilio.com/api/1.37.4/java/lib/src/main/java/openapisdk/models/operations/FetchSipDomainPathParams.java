package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSipDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchSipDomainPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchSipDomainPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}