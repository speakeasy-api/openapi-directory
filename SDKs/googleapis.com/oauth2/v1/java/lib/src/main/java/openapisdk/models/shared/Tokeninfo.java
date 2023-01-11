package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Tokeninfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audience")
    public String audience;
    public Tokeninfo withAudience(String audience) {
        this.audience = audience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Tokeninfo withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_verified")
    public Boolean emailVerified;
    public Tokeninfo withEmailVerified(Boolean emailVerified) {
        this.emailVerified = emailVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_in")
    public Integer expiresIn;
    public Tokeninfo withExpiresIn(Integer expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issued_at")
    public Integer issuedAt;
    public Tokeninfo withIssuedAt(Integer issuedAt) {
        this.issuedAt = issuedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issued_to")
    public String issuedTo;
    public Tokeninfo withIssuedTo(String issuedTo) {
        this.issuedTo = issuedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public Tokeninfo withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonce")
    public String nonce;
    public Tokeninfo withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String scope;
    public Tokeninfo withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public Tokeninfo withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verified_email")
    public Boolean verifiedEmail;
    public Tokeninfo withVerifiedEmail(Boolean verifiedEmail) {
        this.verifiedEmail = verifiedEmail;
        return this;
    }
}