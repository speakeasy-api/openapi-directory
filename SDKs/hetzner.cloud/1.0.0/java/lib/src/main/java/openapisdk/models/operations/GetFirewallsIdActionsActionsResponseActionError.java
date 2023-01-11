package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetFirewallsIdActionsActionsResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetFirewallsIdActionsActionsResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetFirewallsIdActionsActionsResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetFirewallsIdActionsActionsResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}