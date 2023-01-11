package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SmsMessageResponse {
    @JsonProperty("numberValid")
    public Boolean numberValid;
    public SmsMessageResponse withNumberValid(Boolean numberValid) {
        this.numberValid = numberValid;
        return this;
    }
    @JsonProperty("sent")
    public Boolean sent;
    public SmsMessageResponse withSent(Boolean sent) {
        this.sent = sent;
        return this;
    }
}