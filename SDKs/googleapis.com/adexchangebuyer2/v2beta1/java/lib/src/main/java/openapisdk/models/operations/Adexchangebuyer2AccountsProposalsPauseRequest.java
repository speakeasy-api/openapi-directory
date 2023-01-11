package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsProposalsPauseRequest {
    public Adexchangebuyer2AccountsProposalsPausePathParams pathParams;
    public Adexchangebuyer2AccountsProposalsPauseRequest withPathParams(Adexchangebuyer2AccountsProposalsPausePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsProposalsPauseQueryParams queryParams;
    public Adexchangebuyer2AccountsProposalsPauseRequest withQueryParams(Adexchangebuyer2AccountsProposalsPauseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PauseProposalRequest request;
    public Adexchangebuyer2AccountsProposalsPauseRequest withRequest(openapisdk.models.shared.PauseProposalRequest request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsProposalsPauseSecurity security;
    public Adexchangebuyer2AccountsProposalsPauseRequest withSecurity(Adexchangebuyer2AccountsProposalsPauseSecurity security) {
        this.security = security;
        return this;
    }
}