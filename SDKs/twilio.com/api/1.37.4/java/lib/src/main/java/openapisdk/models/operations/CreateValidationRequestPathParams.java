package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateValidationRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateValidationRequestPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}