package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenericOauth2ModuleConfig
 * Settings to authenticate users using a generic OAuth2 provider
**/
public class GenericOauth2ModuleConfig {
    @JsonProperty("accessTokenField")
    public String accessTokenField;
    public GenericOauth2ModuleConfig withAccessTokenField(String accessTokenField) {
        this.accessTokenField = accessTokenField;
        return this;
    }
    @JsonProperty("authorizeUrl")
    public String authorizeUrl;
    public GenericOauth2ModuleConfig withAuthorizeUrl(String authorizeUrl) {
        this.authorizeUrl = authorizeUrl;
        return this;
    }
    @JsonProperty("callbackUrl")
    public String callbackUrl;
    public GenericOauth2ModuleConfig withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claims")
    public String claims;
    public GenericOauth2ModuleConfig withClaims(String claims) {
        this.claims = claims;
        return this;
    }
    @JsonProperty("clientId")
    public String clientId;
    public GenericOauth2ModuleConfig withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("clientSecret")
    public String clientSecret;
    public GenericOauth2ModuleConfig withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonProperty("desc")
    public String desc;
    public GenericOauth2ModuleConfig withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonProperty("emailField")
    public String emailField;
    public GenericOauth2ModuleConfig withEmailField(String emailField) {
        this.emailField = emailField;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public GenericOauth2ModuleConfig withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwtVerifier")
    public Object jwtVerifier;
    public GenericOauth2ModuleConfig withJwtVerifier(Object jwtVerifier) {
        this.jwtVerifier = jwtVerifier;
        return this;
    }
    @JsonProperty("loginUrl")
    public String loginUrl;
    public GenericOauth2ModuleConfig withLoginUrl(String loginUrl) {
        this.loginUrl = loginUrl;
        return this;
    }
    @JsonProperty("logoutUrl")
    public String logoutUrl;
    public GenericOauth2ModuleConfig withLogoutUrl(String logoutUrl) {
        this.logoutUrl = logoutUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GenericOauth2ModuleConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("nameField")
    public String nameField;
    public GenericOauth2ModuleConfig withNameField(String nameField) {
        this.nameField = nameField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oidConfig")
    public String oidConfig;
    public GenericOauth2ModuleConfig withOidConfig(String oidConfig) {
        this.oidConfig = oidConfig;
        return this;
    }
    @JsonProperty("otoroshiDataField")
    public String otoroshiDataField;
    public GenericOauth2ModuleConfig withOtoroshiDataField(String otoroshiDataField) {
        this.otoroshiDataField = otoroshiDataField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readProfileFromToken")
    public Boolean readProfileFromToken;
    public GenericOauth2ModuleConfig withReadProfileFromToken(Boolean readProfileFromToken) {
        this.readProfileFromToken = readProfileFromToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String scope;
    public GenericOauth2ModuleConfig withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @JsonProperty("sessionMaxAge")
    public Integer sessionMaxAge;
    public GenericOauth2ModuleConfig withSessionMaxAge(Integer sessionMaxAge) {
        this.sessionMaxAge = sessionMaxAge;
        return this;
    }
    @JsonProperty("tokenUrl")
    public String tokenUrl;
    public GenericOauth2ModuleConfig withTokenUrl(String tokenUrl) {
        this.tokenUrl = tokenUrl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GenericOauth2ModuleConfig withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useCookies")
    public Boolean useCookies;
    public GenericOauth2ModuleConfig withUseCookies(Boolean useCookies) {
        this.useCookies = useCookies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useJson")
    public Boolean useJson;
    public GenericOauth2ModuleConfig withUseJson(Boolean useJson) {
        this.useJson = useJson;
        return this;
    }
    @JsonProperty("userInfoUrl")
    public String userInfoUrl;
    public GenericOauth2ModuleConfig withUserInfoUrl(String userInfoUrl) {
        this.userInfoUrl = userInfoUrl;
        return this;
    }
}