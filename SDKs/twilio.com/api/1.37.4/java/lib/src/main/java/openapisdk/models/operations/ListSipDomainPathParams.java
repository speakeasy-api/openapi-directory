package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListSipDomainPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}