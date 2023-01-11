package openapisdk.models.operations;



public class GenderGeoRequest {
    public GenderGeoPathParams pathParams;
    public GenderGeoRequest withPathParams(GenderGeoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GenderGeoSecurity security;
    public GenderGeoRequest withSecurity(GenderGeoSecurity security) {
        this.security = security;
        return this;
    }
}