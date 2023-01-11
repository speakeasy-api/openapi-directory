package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CopyTemplate404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public CopyTemplate404ApplicationJsonErrorEnum error;
    public CopyTemplate404ApplicationJson withError(CopyTemplate404ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public CopyTemplate404ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}