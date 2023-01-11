package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetFloatingIpsIdActionsActionIdActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetFloatingIpsIdActionsActionIdActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetFloatingIpsIdActionsActionIdActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetFloatingIpsIdActionsActionIdActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}