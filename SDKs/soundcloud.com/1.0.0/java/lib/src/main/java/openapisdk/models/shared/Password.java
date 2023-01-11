package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Password {
    @SpeakeasyMetadata("form:name=client_id")
    public String clientId;
    public Password withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("form:name=client_secret")
    public String clientSecret;
    public Password withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=grant_type")
    public PasswordGrantTypeEnum grantType;
    public Password withGrantType(PasswordGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @SpeakeasyMetadata("form:name=password")
    public String password;
    public Password withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("form:name=redirect_uri")
    public String redirectUri;
    public Password withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @SpeakeasyMetadata("form:name=user_name")
    public String userName;
    public Password withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}