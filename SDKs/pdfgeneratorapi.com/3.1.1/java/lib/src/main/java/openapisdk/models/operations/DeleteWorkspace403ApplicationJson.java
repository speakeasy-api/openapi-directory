package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteWorkspace403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public DeleteWorkspace403ApplicationJsonErrorEnum error;
    public DeleteWorkspace403ApplicationJson withError(DeleteWorkspace403ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public DeleteWorkspace403ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}