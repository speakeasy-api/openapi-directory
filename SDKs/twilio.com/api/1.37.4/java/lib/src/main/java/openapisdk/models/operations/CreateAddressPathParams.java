package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateAddressPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}