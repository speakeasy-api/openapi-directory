package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberLocalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateIncomingPhoneNumberLocalPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}