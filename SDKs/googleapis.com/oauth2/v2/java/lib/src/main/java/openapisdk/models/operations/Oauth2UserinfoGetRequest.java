package openapisdk.models.operations;



public class Oauth2UserinfoGetRequest {
    public Oauth2UserinfoGetQueryParams queryParams;
    public Oauth2UserinfoGetRequest withQueryParams(Oauth2UserinfoGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public Oauth2UserinfoGetSecurity security;
    public Oauth2UserinfoGetRequest withSecurity(Oauth2UserinfoGetSecurity security) {
        this.security = security;
        return this;
    }
}