package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIncomingPhoneNumberTollFreePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListIncomingPhoneNumberTollFreePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}