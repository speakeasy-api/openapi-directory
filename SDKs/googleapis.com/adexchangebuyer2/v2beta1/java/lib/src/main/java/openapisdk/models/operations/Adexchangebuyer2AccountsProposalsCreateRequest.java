package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsProposalsCreateRequest {
    public Adexchangebuyer2AccountsProposalsCreatePathParams pathParams;
    public Adexchangebuyer2AccountsProposalsCreateRequest withPathParams(Adexchangebuyer2AccountsProposalsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsProposalsCreateQueryParams queryParams;
    public Adexchangebuyer2AccountsProposalsCreateRequest withQueryParams(Adexchangebuyer2AccountsProposalsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProposalInput request;
    public Adexchangebuyer2AccountsProposalsCreateRequest withRequest(openapisdk.models.shared.ProposalInput request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsProposalsCreateSecurity security;
    public Adexchangebuyer2AccountsProposalsCreateRequest withSecurity(Adexchangebuyer2AccountsProposalsCreateSecurity security) {
        this.security = security;
        return this;
    }
}