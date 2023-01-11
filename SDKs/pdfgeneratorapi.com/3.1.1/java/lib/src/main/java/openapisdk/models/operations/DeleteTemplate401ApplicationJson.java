package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteTemplate401ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public DeleteTemplate401ApplicationJsonErrorEnum error;
    public DeleteTemplate401ApplicationJson withError(DeleteTemplate401ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public DeleteTemplate401ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}