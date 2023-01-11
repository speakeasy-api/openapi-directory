package openapisdk.models.operations;



public class CampaignsFetchRequest {
    public CampaignsFetchPathParams pathParams;
    public CampaignsFetchRequest withPathParams(CampaignsFetchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CampaignsFetchSecurity security;
    public CampaignsFetchRequest withSecurity(CampaignsFetchSecurity security) {
        this.security = security;
        return this;
    }
}