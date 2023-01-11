package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PayableIssue2
 * payable issues for the payee and payor combination
**/
public class PayableIssue2 {
    @JsonProperty("code")
    public String code;
    public PayableIssue2 withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PayableIssue2 withMessage(String message) {
        this.message = message;
        return this;
    }
}