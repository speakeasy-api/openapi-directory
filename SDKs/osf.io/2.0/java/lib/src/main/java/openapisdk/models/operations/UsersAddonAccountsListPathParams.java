package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersAddonAccountsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=provider")
    public String provider;
    public UsersAddonAccountsListPathParams withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public UsersAddonAccountsListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}