package openapisdk.models.operations;



public class ParseNameRequest {
    public ParseNamePathParams pathParams;
    public ParseNameRequest withPathParams(ParseNamePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ParseNameSecurity security;
    public ParseNameRequest withSecurity(ParseNameSecurity security) {
        this.security = security;
        return this;
    }
}