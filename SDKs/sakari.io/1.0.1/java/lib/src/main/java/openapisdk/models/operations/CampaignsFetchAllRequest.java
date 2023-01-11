package openapisdk.models.operations;



public class CampaignsFetchAllRequest {
    public CampaignsFetchAllPathParams pathParams;
    public CampaignsFetchAllRequest withPathParams(CampaignsFetchAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CampaignsFetchAllQueryParams queryParams;
    public CampaignsFetchAllRequest withQueryParams(CampaignsFetchAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CampaignsFetchAllSecurity security;
    public CampaignsFetchAllRequest withSecurity(CampaignsFetchAllSecurity security) {
        this.security = security;
        return this;
    }
}