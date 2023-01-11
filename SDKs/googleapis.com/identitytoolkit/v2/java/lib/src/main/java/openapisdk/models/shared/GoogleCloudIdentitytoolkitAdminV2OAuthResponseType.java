package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2OAuthResponseType
 * The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported. See https://openid.net/specs/openid-connect-core-1_0.html#Authentication for a mapping of response type to OAuth 2.0 flow.
**/
public class GoogleCloudIdentitytoolkitAdminV2OAuthResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Boolean code;
    public GoogleCloudIdentitytoolkitAdminV2OAuthResponseType withCode(Boolean code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public Boolean idToken;
    public GoogleCloudIdentitytoolkitAdminV2OAuthResponseType withIdToken(Boolean idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public Boolean token;
    public GoogleCloudIdentitytoolkitAdminV2OAuthResponseType withToken(Boolean token) {
        this.token = token;
        return this;
    }
}