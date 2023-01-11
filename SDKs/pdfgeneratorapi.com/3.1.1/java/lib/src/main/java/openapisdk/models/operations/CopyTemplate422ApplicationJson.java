package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CopyTemplate422ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public CopyTemplate422ApplicationJsonErrorEnum error;
    public CopyTemplate422ApplicationJson withError(CopyTemplate422ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public CopyTemplate422ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}