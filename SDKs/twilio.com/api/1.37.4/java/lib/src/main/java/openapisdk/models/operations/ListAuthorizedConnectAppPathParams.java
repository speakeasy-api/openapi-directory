package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAuthorizedConnectAppPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListAuthorizedConnectAppPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}