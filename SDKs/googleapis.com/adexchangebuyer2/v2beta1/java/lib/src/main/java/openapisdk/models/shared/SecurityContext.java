package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecurityContext
 * Output only. A security context.
**/
public class SecurityContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securities")
    public SecurityContextSecuritiesEnum[] securities;
    public SecurityContext withSecurities(SecurityContextSecuritiesEnum[] securities) {
        this.securities = securities;
        return this;
    }
}