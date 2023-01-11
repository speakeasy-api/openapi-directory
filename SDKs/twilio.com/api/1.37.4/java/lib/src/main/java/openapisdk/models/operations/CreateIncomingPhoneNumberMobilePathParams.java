package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberMobilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateIncomingPhoneNumberMobilePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}