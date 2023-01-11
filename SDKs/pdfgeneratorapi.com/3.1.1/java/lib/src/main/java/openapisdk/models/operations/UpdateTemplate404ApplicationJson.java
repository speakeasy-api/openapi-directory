package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateTemplate404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public UpdateTemplate404ApplicationJsonErrorEnum error;
    public UpdateTemplate404ApplicationJson withError(UpdateTemplate404ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public UpdateTemplate404ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}