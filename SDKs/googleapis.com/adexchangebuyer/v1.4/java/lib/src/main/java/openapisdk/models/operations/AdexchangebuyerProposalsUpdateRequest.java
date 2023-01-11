package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerProposalsUpdateRequest {
    public AdexchangebuyerProposalsUpdatePathParams pathParams;
    public AdexchangebuyerProposalsUpdateRequest withPathParams(AdexchangebuyerProposalsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerProposalsUpdateQueryParams queryParams;
    public AdexchangebuyerProposalsUpdateRequest withQueryParams(AdexchangebuyerProposalsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Proposal request;
    public AdexchangebuyerProposalsUpdateRequest withRequest(openapisdk.models.shared.Proposal request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerProposalsUpdateSecurity security;
    public AdexchangebuyerProposalsUpdateRequest withSecurity(AdexchangebuyerProposalsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}