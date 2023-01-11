package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthenticationObject
 * Authentication object.
 * 
**/
public class AuthenticationObject {
    @JsonProperty("authenticationMethodId")
    public String authenticationMethodId;
    public AuthenticationObject withAuthenticationMethodId(String authenticationMethodId) {
        this.authenticationMethodId = authenticationMethodId;
        return this;
    }
    @JsonProperty("authenticationType")
    public AuthenticationTypeEnum authenticationType;
    public AuthenticationObject withAuthenticationType(AuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticationVersion")
    public String authenticationVersion;
    public AuthenticationObject withAuthenticationVersion(String authenticationVersion) {
        this.authenticationVersion = authenticationVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public String explanation;
    public AuthenticationObject withExplanation(String explanation) {
        this.explanation = explanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AuthenticationObject withName(String name) {
        this.name = name;
        return this;
    }
}