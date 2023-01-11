package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIncomingPhoneNumberLocalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListIncomingPhoneNumberLocalPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}