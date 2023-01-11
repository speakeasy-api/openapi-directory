package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipCredentialListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListSipCredentialListPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}