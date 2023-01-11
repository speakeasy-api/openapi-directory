package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNewSigningKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateNewSigningKeyPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}