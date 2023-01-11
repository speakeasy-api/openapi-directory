package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeTemplate403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public MergeTemplate403ApplicationJsonErrorEnum error;
    public MergeTemplate403ApplicationJson withError(MergeTemplate403ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public MergeTemplate403ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}