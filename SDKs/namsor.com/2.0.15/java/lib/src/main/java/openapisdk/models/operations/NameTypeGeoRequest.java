package openapisdk.models.operations;



public class NameTypeGeoRequest {
    public NameTypeGeoPathParams pathParams;
    public NameTypeGeoRequest withPathParams(NameTypeGeoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NameTypeGeoSecurity security;
    public NameTypeGeoRequest withSecurity(NameTypeGeoSecurity security) {
        this.security = security;
        return this;
    }
}