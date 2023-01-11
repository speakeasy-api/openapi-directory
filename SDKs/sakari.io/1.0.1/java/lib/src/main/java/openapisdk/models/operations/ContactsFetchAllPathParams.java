package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsFetchAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ContactsFetchAllPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}