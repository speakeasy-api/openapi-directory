package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersAddonAccountsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public String accountId;
    public UsersAddonAccountsReadPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=provider")
    public String provider;
    public UsersAddonAccountsReadPathParams withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public UsersAddonAccountsReadPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}