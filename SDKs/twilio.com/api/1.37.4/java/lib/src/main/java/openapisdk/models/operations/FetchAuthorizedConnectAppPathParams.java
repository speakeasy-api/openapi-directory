package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchAuthorizedConnectAppPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchAuthorizedConnectAppPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConnectAppSid")
    public String connectAppSid;
    public FetchAuthorizedConnectAppPathParams withConnectAppSid(String connectAppSid) {
        this.connectAppSid = connectAppSid;
        return this;
    }
}