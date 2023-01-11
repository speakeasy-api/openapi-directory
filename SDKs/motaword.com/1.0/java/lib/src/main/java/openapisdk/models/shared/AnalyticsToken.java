package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AnalyticsToken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwt")
    public String jwt;
    public AnalyticsToken withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
}