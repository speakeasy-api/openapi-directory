package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAccessTokenApplicationJson {
    @JsonProperty("client_id")
    public String clientId;
    public CreateAccessTokenApplicationJson withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_secret")
    public String clientSecret;
    public CreateAccessTokenApplicationJson withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public CreateAccessTokenApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires")
    public Boolean expires;
    public CreateAccessTokenApplicationJson withExpires(Boolean expires) {
        this.expires = expires;
        return this;
    }
    @JsonProperty("grant_type")
    public CreateAccessTokenApplicationJsonGrantTypeEnum grantType;
    public CreateAccessTokenApplicationJson withGrantType(CreateAccessTokenApplicationJsonGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("realm")
    public CreateAccessTokenApplicationJsonRealmEnum realm;
    public CreateAccessTokenApplicationJson withRealm(CreateAccessTokenApplicationJsonRealmEnum realm) {
        this.realm = realm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refresh_token")
    public String refreshToken;
    public CreateAccessTokenApplicationJson withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}