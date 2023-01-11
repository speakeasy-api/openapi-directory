package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUserAccountsUserAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userAccountId")
    public String userAccountId;
    public PatchUserAccountsUserAccountIdPathParams withUserAccountId(String userAccountId) {
        this.userAccountId = userAccountId;
        return this;
    }
}