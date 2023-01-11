package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConnectAppPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListConnectAppPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}