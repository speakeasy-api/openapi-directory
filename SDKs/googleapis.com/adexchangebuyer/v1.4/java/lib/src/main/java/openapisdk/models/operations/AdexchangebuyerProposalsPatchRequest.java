package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerProposalsPatchRequest {
    public AdexchangebuyerProposalsPatchPathParams pathParams;
    public AdexchangebuyerProposalsPatchRequest withPathParams(AdexchangebuyerProposalsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerProposalsPatchQueryParams queryParams;
    public AdexchangebuyerProposalsPatchRequest withQueryParams(AdexchangebuyerProposalsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Proposal request;
    public AdexchangebuyerProposalsPatchRequest withRequest(openapisdk.models.shared.Proposal request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerProposalsPatchSecurity security;
    public AdexchangebuyerProposalsPatchRequest withSecurity(AdexchangebuyerProposalsPatchSecurity security) {
        this.security = security;
        return this;
    }
}