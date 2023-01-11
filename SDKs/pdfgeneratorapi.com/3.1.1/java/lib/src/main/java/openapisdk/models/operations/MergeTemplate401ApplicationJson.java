package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeTemplate401ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public MergeTemplate401ApplicationJsonErrorEnum error;
    public MergeTemplate401ApplicationJson withError(MergeTemplate401ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public MergeTemplate401ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}