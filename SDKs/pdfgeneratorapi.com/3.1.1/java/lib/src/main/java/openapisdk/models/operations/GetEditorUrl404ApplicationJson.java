package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEditorUrl404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public GetEditorUrl404ApplicationJsonErrorEnum error;
    public GetEditorUrl404ApplicationJson withError(GetEditorUrl404ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public GetEditorUrl404ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}