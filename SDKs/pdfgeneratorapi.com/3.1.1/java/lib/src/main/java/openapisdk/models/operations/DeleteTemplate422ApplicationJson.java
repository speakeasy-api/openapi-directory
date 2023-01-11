package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteTemplate422ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public DeleteTemplate422ApplicationJsonErrorEnum error;
    public DeleteTemplate422ApplicationJson withError(DeleteTemplate422ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public DeleteTemplate422ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}