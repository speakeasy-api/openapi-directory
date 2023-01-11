package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthorizationCode
 * Defines an authorization code.
**/
public class AuthorizationCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public AuthorizationCode withCode(String code) {
        this.code = code;
        return this;
    }
}