package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorAccountsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountName")
    public String accountName;
    public MirrorAccountsInsertPathParams withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountType")
    public String accountType;
    public MirrorAccountsInsertPathParams withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userToken")
    public String userToken;
    public MirrorAccountsInsertPathParams withUserToken(String userToken) {
        this.userToken = userToken;
        return this;
    }
}