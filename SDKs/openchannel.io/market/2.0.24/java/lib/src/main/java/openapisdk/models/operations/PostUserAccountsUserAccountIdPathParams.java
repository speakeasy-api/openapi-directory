package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUserAccountsUserAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userAccountId")
    public String userAccountId;
    public PostUserAccountsUserAccountIdPathParams withUserAccountId(String userAccountId) {
        this.userAccountId = userAccountId;
        return this;
    }
}