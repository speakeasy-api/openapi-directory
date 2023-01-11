package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsClientsInvitationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public Adexchangebuyer2AccountsClientsInvitationsListPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientAccountId")
    public String clientAccountId;
    public Adexchangebuyer2AccountsClientsInvitationsListPathParams withClientAccountId(String clientAccountId) {
        this.clientAccountId = clientAccountId;
        return this;
    }
}