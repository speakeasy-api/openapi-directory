package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsProposalsUpdateRequest {
    public Adexchangebuyer2AccountsProposalsUpdatePathParams pathParams;
    public Adexchangebuyer2AccountsProposalsUpdateRequest withPathParams(Adexchangebuyer2AccountsProposalsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsProposalsUpdateQueryParams queryParams;
    public Adexchangebuyer2AccountsProposalsUpdateRequest withQueryParams(Adexchangebuyer2AccountsProposalsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProposalInput request;
    public Adexchangebuyer2AccountsProposalsUpdateRequest withRequest(openapisdk.models.shared.ProposalInput request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsProposalsUpdateSecurity security;
    public Adexchangebuyer2AccountsProposalsUpdateRequest withSecurity(Adexchangebuyer2AccountsProposalsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}