package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CorsSettings
 * Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS call to bypass authentication and authorization.
**/
public class CorsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowHttpOptions")
    public Boolean allowHttpOptions;
    public CorsSettings withAllowHttpOptions(Boolean allowHttpOptions) {
        this.allowHttpOptions = allowHttpOptions;
        return this;
    }
}