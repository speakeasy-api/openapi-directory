package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccessTokenApplicationXWwwFormUrlencoded {
    @SpeakeasyMetadata("form:name=client_id")
    public String clientId;
    public CreateAccessTokenApplicationXWwwFormUrlencoded withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("form:name=client_secret")
    public String clientSecret;
    public CreateAccessTokenApplicationXWwwFormUrlencoded withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=code")
    public String code;
    public CreateAccessTokenApplicationXWwwFormUrlencoded withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("form:name=expires")
    public CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum expires;
    public CreateAccessTokenApplicationXWwwFormUrlencoded withExpires(CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum expires) {
        this.expires = expires;
        return this;
    }
    @SpeakeasyMetadata("form:name=grant_type")
    public CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum grantType;
    public CreateAccessTokenApplicationXWwwFormUrlencoded withGrantType(CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @SpeakeasyMetadata("form:name=realm")
    public CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum realm;
    public CreateAccessTokenApplicationXWwwFormUrlencoded withRealm(CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum realm) {
        this.realm = realm;
        return this;
    }
    @SpeakeasyMetadata("form:name=refresh_token")
    public String refreshToken;
    public CreateAccessTokenApplicationXWwwFormUrlencoded withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}