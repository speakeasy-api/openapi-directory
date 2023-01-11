package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthConfig
 * AuthConfig defines details of a authentication type.
**/
public class AuthConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalVariables")
    public ConfigVariable[] additionalVariables;
    public AuthConfig withAdditionalVariables(ConfigVariable[] additionalVariables) {
        this.additionalVariables = additionalVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authType")
    public AuthConfigAuthTypeEnum authType;
    public AuthConfig withAuthType(AuthConfigAuthTypeEnum authType) {
        this.authType = authType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth2ClientCredentials")
    public Oauth2ClientCredentials oauth2ClientCredentials;
    public AuthConfig withOauth2ClientCredentials(Oauth2ClientCredentials oauth2ClientCredentials) {
        this.oauth2ClientCredentials = oauth2ClientCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth2JwtBearer")
    public Oauth2JwtBearer oauth2JwtBearer;
    public AuthConfig withOauth2JwtBearer(Oauth2JwtBearer oauth2JwtBearer) {
        this.oauth2JwtBearer = oauth2JwtBearer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sshPublicKey")
    public SshPublicKey sshPublicKey;
    public AuthConfig withSshPublicKey(SshPublicKey sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userPassword")
    public UserPassword userPassword;
    public AuthConfig withUserPassword(UserPassword userPassword) {
        this.userPassword = userPassword;
        return this;
    }
}