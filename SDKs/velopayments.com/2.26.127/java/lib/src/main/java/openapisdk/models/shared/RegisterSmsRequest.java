package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterSmsRequest {
    @JsonProperty("smsNumber")
    public String smsNumber;
    public RegisterSmsRequest withSmsNumber(String smsNumber) {
        this.smsNumber = smsNumber;
        return this;
    }
}