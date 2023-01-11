package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEditorUrl403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public GetEditorUrl403ApplicationJsonErrorEnum error;
    public GetEditorUrl403ApplicationJson withError(GetEditorUrl403ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public GetEditorUrl403ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}