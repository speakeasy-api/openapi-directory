package openapisdk.models.operations;



public class GenderFullGeoRequest {
    public GenderFullGeoPathParams pathParams;
    public GenderFullGeoRequest withPathParams(GenderFullGeoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GenderFullGeoSecurity security;
    public GenderFullGeoRequest withSecurity(GenderFullGeoSecurity security) {
        this.security = security;
        return this;
    }
}