package openapisdk.models.operations;



public class CampaignsRemoveRequest {
    public CampaignsRemovePathParams pathParams;
    public CampaignsRemoveRequest withPathParams(CampaignsRemovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CampaignsRemoveSecurity security;
    public CampaignsRemoveRequest withSecurity(CampaignsRemoveSecurity security) {
        this.security = security;
        return this;
    }
}