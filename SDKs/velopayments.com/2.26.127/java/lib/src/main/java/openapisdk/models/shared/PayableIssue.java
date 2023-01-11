package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PayableIssue
 * payable issues for the payee and payor combination
**/
public class PayableIssue {
    @JsonProperty("code")
    public String code;
    public PayableIssue withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PayableIssue withMessage(String message) {
        this.message = message;
        return this;
    }
}