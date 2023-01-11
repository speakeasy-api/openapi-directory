package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIncomingPhoneNumberMobilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListIncomingPhoneNumberMobilePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}