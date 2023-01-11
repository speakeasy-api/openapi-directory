package openapisdk.models.operations;



public class ParseNameGeoRequest {
    public ParseNameGeoPathParams pathParams;
    public ParseNameGeoRequest withPathParams(ParseNameGeoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ParseNameGeoSecurity security;
    public ParseNameGeoRequest withSecurity(ParseNameGeoSecurity security) {
        this.security = security;
        return this;
    }
}