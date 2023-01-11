package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTemplate401ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public CreateTemplate401ApplicationJsonErrorEnum error;
    public CreateTemplate401ApplicationJson withError(CreateTemplate401ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public CreateTemplate401ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}