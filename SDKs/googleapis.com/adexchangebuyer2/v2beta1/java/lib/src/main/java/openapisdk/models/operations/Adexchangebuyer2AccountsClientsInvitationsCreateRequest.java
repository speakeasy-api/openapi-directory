package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsClientsInvitationsCreateRequest {
    public Adexchangebuyer2AccountsClientsInvitationsCreatePathParams pathParams;
    public Adexchangebuyer2AccountsClientsInvitationsCreateRequest withPathParams(Adexchangebuyer2AccountsClientsInvitationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams queryParams;
    public Adexchangebuyer2AccountsClientsInvitationsCreateRequest withQueryParams(Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClientUserInvitation request;
    public Adexchangebuyer2AccountsClientsInvitationsCreateRequest withRequest(openapisdk.models.shared.ClientUserInvitation request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsClientsInvitationsCreateSecurity security;
    public Adexchangebuyer2AccountsClientsInvitationsCreateRequest withSecurity(Adexchangebuyer2AccountsClientsInvitationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}