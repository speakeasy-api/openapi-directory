package openapisdk.models.operations;



public class CampaignsUpdateRequest {
    public CampaignsUpdatePathParams pathParams;
    public CampaignsUpdateRequest withPathParams(CampaignsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CampaignsUpdateSecurity security;
    public CampaignsUpdateRequest withSecurity(CampaignsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}