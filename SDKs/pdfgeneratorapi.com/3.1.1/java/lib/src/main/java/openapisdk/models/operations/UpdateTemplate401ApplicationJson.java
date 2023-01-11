package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateTemplate401ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public UpdateTemplate401ApplicationJsonErrorEnum error;
    public UpdateTemplate401ApplicationJson withError(UpdateTemplate401ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public UpdateTemplate401ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}