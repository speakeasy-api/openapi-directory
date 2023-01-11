package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateMessagePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}