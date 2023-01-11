package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsClientsInvitationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public Adexchangebuyer2AccountsClientsInvitationsGetPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientAccountId")
    public String clientAccountId;
    public Adexchangebuyer2AccountsClientsInvitationsGetPathParams withClientAccountId(String clientAccountId) {
        this.clientAccountId = clientAccountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invitationId")
    public String invitationId;
    public Adexchangebuyer2AccountsClientsInvitationsGetPathParams withInvitationId(String invitationId) {
        this.invitationId = invitationId;
        return this;
    }
}