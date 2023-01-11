package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FourHundredAndFour {
    @JsonProperty("code")
    public String code;
    public FourHundredAndFour withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public FourHundredAndFour withMessage(String message) {
        this.message = message;
        return this;
    }
}