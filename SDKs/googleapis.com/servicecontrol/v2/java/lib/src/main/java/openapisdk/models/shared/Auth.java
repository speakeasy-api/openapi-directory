package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Auth
 * This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards.
**/
public class Auth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLevels")
    public String[] accessLevels;
    public Auth withAccessLevels(String[] accessLevels) {
        this.accessLevels = accessLevels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audiences")
    public String[] audiences;
    public Auth withAudiences(String[] audiences) {
        this.audiences = audiences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claims")
    public java.util.Map<String, Object> claims;
    public Auth withClaims(java.util.Map<String, Object> claims) {
        this.claims = claims;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presenter")
    public String presenter;
    public Auth withPresenter(String presenter) {
        this.presenter = presenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public Auth withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
}