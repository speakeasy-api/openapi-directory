package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateTemplate422ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public UpdateTemplate422ApplicationJsonErrorEnum error;
    public UpdateTemplate422ApplicationJson withError(UpdateTemplate422ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public UpdateTemplate422ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}