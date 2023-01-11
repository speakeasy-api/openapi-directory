package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsClientsUsersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public Adexchangebuyer2AccountsClientsUsersGetPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientAccountId")
    public String clientAccountId;
    public Adexchangebuyer2AccountsClientsUsersGetPathParams withClientAccountId(String clientAccountId) {
        this.clientAccountId = clientAccountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public Adexchangebuyer2AccountsClientsUsersGetPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}