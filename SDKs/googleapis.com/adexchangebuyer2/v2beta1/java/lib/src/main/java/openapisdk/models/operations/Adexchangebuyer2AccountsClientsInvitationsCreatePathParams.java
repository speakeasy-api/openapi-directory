package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsClientsInvitationsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public Adexchangebuyer2AccountsClientsInvitationsCreatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientAccountId")
    public String clientAccountId;
    public Adexchangebuyer2AccountsClientsInvitationsCreatePathParams withClientAccountId(String clientAccountId) {
        this.clientAccountId = clientAccountId;
        return this;
    }
}