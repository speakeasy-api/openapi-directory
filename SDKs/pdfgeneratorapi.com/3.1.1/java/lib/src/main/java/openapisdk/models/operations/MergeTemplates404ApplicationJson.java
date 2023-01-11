package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeTemplates404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public MergeTemplates404ApplicationJsonErrorEnum error;
    public MergeTemplates404ApplicationJson withError(MergeTemplates404ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public MergeTemplates404ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}