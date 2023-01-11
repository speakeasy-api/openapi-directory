package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JwtClaims
 * JWT claims used for the jwt-bearer authorization grant.
**/
public class JwtClaims {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audience")
    public String audience;
    public JwtClaims withAudience(String audience) {
        this.audience = audience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public JwtClaims withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public JwtClaims withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}