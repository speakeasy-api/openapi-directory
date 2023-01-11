package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsProposalsAcceptRequest {
    public Adexchangebuyer2AccountsProposalsAcceptPathParams pathParams;
    public Adexchangebuyer2AccountsProposalsAcceptRequest withPathParams(Adexchangebuyer2AccountsProposalsAcceptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsProposalsAcceptQueryParams queryParams;
    public Adexchangebuyer2AccountsProposalsAcceptRequest withQueryParams(Adexchangebuyer2AccountsProposalsAcceptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcceptProposalRequest request;
    public Adexchangebuyer2AccountsProposalsAcceptRequest withRequest(openapisdk.models.shared.AcceptProposalRequest request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsProposalsAcceptSecurity security;
    public Adexchangebuyer2AccountsProposalsAcceptRequest withSecurity(Adexchangebuyer2AccountsProposalsAcceptSecurity security) {
        this.security = security;
        return this;
    }
}