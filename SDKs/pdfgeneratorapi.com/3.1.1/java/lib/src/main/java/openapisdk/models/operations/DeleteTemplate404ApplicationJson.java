package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteTemplate404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public DeleteTemplate404ApplicationJsonErrorEnum error;
    public DeleteTemplate404ApplicationJson withError(DeleteTemplate404ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public DeleteTemplate404ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}