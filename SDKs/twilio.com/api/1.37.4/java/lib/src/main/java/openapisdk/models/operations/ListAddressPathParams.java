package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListAddressPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}