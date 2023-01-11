package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeTemplates422ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public MergeTemplates422ApplicationJsonErrorEnum error;
    public MergeTemplates422ApplicationJson withError(MergeTemplates422ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public MergeTemplates422ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}