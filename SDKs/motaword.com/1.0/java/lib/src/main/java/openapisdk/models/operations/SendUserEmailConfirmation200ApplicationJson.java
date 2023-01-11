package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendUserEmailConfirmation200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SendUserEmailConfirmation200ApplicationJsonStatusEnum status;
    public SendUserEmailConfirmation200ApplicationJson withStatus(SendUserEmailConfirmation200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}