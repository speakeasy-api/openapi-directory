package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsFinalizedProposalsPauseRequest {
    public Adexchangebuyer2AccountsFinalizedProposalsPausePathParams pathParams;
    public Adexchangebuyer2AccountsFinalizedProposalsPauseRequest withPathParams(Adexchangebuyer2AccountsFinalizedProposalsPausePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams queryParams;
    public Adexchangebuyer2AccountsFinalizedProposalsPauseRequest withQueryParams(Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PauseProposalDealsRequest request;
    public Adexchangebuyer2AccountsFinalizedProposalsPauseRequest withRequest(openapisdk.models.shared.PauseProposalDealsRequest request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity security;
    public Adexchangebuyer2AccountsFinalizedProposalsPauseRequest withSecurity(Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity security) {
        this.security = security;
        return this;
    }
}