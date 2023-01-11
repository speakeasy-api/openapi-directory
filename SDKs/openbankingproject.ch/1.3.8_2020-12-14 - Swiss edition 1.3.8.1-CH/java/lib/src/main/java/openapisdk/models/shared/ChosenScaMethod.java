package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChosenScaMethod
 * Authentication object.
 * 
**/
public class ChosenScaMethod {
    @JsonProperty("authenticationMethodId")
    public String authenticationMethodId;
    public ChosenScaMethod withAuthenticationMethodId(String authenticationMethodId) {
        this.authenticationMethodId = authenticationMethodId;
        return this;
    }
    @JsonProperty("authenticationType")
    public AuthenticationTypeEnum authenticationType;
    public ChosenScaMethod withAuthenticationType(AuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticationVersion")
    public String authenticationVersion;
    public ChosenScaMethod withAuthenticationVersion(String authenticationVersion) {
        this.authenticationVersion = authenticationVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public String explanation;
    public ChosenScaMethod withExplanation(String explanation) {
        this.explanation = explanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ChosenScaMethod withName(String name) {
        this.name = name;
        return this;
    }
}