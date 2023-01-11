package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizationCode {
    @SpeakeasyMetadata("form:name=authorization_code")
    public String authorizationCode;
    public AuthorizationCode withAuthorizationCode(String authorizationCode) {
        this.authorizationCode = authorizationCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=client_id")
    public String clientId;
    public AuthorizationCode withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("form:name=client_secret")
    public String clientSecret;
    public AuthorizationCode withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=grant_type")
    public AuthorizationCodeGrantTypeEnum grantType;
    public AuthorizationCode withGrantType(AuthorizationCodeGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @SpeakeasyMetadata("form:name=redirect_uri")
    public String redirectUri;
    public AuthorizationCode withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
}