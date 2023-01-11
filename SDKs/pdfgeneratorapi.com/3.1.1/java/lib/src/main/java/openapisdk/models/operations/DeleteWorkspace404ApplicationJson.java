package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteWorkspace404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public DeleteWorkspace404ApplicationJsonErrorEnum error;
    public DeleteWorkspace404ApplicationJson withError(DeleteWorkspace404ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public DeleteWorkspace404ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}