package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendEmailConfirmation200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SendEmailConfirmation200ApplicationJsonStatusEnum status;
    public SendEmailConfirmation200ApplicationJson withStatus(SendEmailConfirmation200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}