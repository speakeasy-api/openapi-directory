package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SignInBehavior
 * Controls sign-in behavior.
**/
public class SignInBehavior {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectCondition")
    public SignInBehaviorRedirectConditionEnum redirectCondition;
    public SignInBehavior withRedirectCondition(SignInBehaviorRedirectConditionEnum redirectCondition) {
        this.redirectCondition = redirectCondition;
        return this;
    }
}