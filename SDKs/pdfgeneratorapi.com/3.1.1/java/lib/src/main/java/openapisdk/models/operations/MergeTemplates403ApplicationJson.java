package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeTemplates403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public MergeTemplates403ApplicationJsonErrorEnum error;
    public MergeTemplates403ApplicationJson withError(MergeTemplates403ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public MergeTemplates403ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}