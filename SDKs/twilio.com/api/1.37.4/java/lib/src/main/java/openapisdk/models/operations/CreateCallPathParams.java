package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateCallPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}