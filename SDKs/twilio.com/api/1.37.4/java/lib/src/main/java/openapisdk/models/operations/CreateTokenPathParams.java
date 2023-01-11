package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateTokenPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}