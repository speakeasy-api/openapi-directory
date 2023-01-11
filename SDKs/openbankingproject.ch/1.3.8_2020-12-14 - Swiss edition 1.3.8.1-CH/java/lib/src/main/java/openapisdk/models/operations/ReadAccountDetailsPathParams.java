package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReadAccountDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-id")
    public String accountId;
    public ReadAccountDetailsPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}