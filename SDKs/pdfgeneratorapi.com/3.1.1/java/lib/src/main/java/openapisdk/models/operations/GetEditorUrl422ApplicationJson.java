package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEditorUrl422ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public GetEditorUrl422ApplicationJsonErrorEnum error;
    public GetEditorUrl422ApplicationJson withError(GetEditorUrl422ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public GetEditorUrl422ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}