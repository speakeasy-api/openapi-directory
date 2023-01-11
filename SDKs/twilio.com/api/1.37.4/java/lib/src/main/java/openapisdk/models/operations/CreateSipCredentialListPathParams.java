package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipCredentialListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateSipCredentialListPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}