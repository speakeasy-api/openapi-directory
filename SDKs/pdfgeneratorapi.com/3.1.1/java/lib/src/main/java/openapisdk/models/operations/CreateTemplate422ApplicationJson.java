package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTemplate422ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public CreateTemplate422ApplicationJsonErrorEnum error;
    public CreateTemplate422ApplicationJson withError(CreateTemplate422ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public CreateTemplate422ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}