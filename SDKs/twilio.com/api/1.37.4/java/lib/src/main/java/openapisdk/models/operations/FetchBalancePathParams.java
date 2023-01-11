package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchBalancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchBalancePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}