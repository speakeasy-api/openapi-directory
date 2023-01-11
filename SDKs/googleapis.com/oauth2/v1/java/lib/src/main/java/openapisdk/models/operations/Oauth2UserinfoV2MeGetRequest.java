package openapisdk.models.operations;



public class Oauth2UserinfoV2MeGetRequest {
    public Oauth2UserinfoV2MeGetQueryParams queryParams;
    public Oauth2UserinfoV2MeGetRequest withQueryParams(Oauth2UserinfoV2MeGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public Oauth2UserinfoV2MeGetSecurity security;
    public Oauth2UserinfoV2MeGetRequest withSecurity(Oauth2UserinfoV2MeGetSecurity security) {
        this.security = security;
        return this;
    }
}