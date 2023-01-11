package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetFloatingIpsIdActions200ApplicationJsonActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetFloatingIpsIdActions200ApplicationJsonActionError {
    @JsonProperty("code")
    public String code;
    public GetFloatingIpsIdActions200ApplicationJsonActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetFloatingIpsIdActions200ApplicationJsonActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}