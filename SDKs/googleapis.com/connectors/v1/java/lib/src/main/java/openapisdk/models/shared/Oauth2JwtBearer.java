package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Oauth2JwtBearer
 * Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
**/
public class Oauth2JwtBearer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientKey")
    public Secret clientKey;
    public Oauth2JwtBearer withClientKey(Secret clientKey) {
        this.clientKey = clientKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwtClaims")
    public JwtClaims jwtClaims;
    public Oauth2JwtBearer withJwtClaims(JwtClaims jwtClaims) {
        this.jwtClaims = jwtClaims;
        return this;
    }
}