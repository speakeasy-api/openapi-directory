package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateApplicationPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}