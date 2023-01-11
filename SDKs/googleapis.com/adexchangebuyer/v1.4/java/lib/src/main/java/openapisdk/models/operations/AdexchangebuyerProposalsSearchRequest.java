package openapisdk.models.operations;



public class AdexchangebuyerProposalsSearchRequest {
    public AdexchangebuyerProposalsSearchQueryParams queryParams;
    public AdexchangebuyerProposalsSearchRequest withQueryParams(AdexchangebuyerProposalsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdexchangebuyerProposalsSearchSecurity security;
    public AdexchangebuyerProposalsSearchRequest withSecurity(AdexchangebuyerProposalsSearchSecurity security) {
        this.security = security;
        return this;
    }
}