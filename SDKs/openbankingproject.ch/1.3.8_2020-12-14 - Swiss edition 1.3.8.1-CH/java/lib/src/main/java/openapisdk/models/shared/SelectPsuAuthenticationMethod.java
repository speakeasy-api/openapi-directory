package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SelectPsuAuthenticationMethod
 * Content of the body of a Select PSU authentication method request
 * 
**/
public class SelectPsuAuthenticationMethod {
    @JsonProperty("authenticationMethodId")
    public String authenticationMethodId;
    public SelectPsuAuthenticationMethod withAuthenticationMethodId(String authenticationMethodId) {
        this.authenticationMethodId = authenticationMethodId;
        return this;
    }
}