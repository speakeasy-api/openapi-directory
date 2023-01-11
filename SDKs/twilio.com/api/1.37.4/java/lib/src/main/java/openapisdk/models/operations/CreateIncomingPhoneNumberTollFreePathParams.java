package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberTollFreePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateIncomingPhoneNumberTollFreePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}