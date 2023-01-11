package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFirewallsCreateFirewallResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostFirewallsCreateFirewallResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostFirewallsCreateFirewallResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostFirewallsCreateFirewallResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}