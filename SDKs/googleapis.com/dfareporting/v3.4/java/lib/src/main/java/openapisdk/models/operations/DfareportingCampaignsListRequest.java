package openapisdk.models.operations;



public class DfareportingCampaignsListRequest {
    public DfareportingCampaignsListPathParams pathParams;
    public DfareportingCampaignsListRequest withPathParams(DfareportingCampaignsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCampaignsListQueryParams queryParams;
    public DfareportingCampaignsListRequest withQueryParams(DfareportingCampaignsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingCampaignsListSecurity security;
    public DfareportingCampaignsListRequest withSecurity(DfareportingCampaignsListSecurity security) {
        this.security = security;
        return this;
    }
}