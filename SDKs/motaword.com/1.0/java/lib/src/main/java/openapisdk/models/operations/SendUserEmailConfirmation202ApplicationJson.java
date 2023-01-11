package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendUserEmailConfirmation202ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SendUserEmailConfirmation202ApplicationJsonStatusEnum status;
    public SendUserEmailConfirmation202ApplicationJson withStatus(SendUserEmailConfirmation202ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}