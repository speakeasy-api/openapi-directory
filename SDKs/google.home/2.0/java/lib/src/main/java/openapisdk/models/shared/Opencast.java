package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Opencast {
    @JsonProperty("pin_code")
    public String pinCode;
    public Opencast withPinCode(String pinCode) {
        this.pinCode = pinCode;
        return this;
    }
}