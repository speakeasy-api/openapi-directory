package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserAccountsUserAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userAccountId")
    public String userAccountId;
    public DeleteUserAccountsUserAccountIdPathParams withUserAccountId(String userAccountId) {
        this.userAccountId = userAccountId;
        return this;
    }
}