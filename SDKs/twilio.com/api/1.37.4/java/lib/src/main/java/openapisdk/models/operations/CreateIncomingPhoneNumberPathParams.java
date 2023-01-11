package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateIncomingPhoneNumberPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}