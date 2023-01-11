package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserAccountsUserAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userAccountId")
    public String userAccountId;
    public GetUserAccountsUserAccountIdPathParams withUserAccountId(String userAccountId) {
        this.userAccountId = userAccountId;
        return this;
    }
}