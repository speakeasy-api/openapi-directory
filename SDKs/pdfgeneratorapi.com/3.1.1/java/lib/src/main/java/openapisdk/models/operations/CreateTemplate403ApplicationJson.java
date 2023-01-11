package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTemplate403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public CreateTemplate403ApplicationJsonErrorEnum error;
    public CreateTemplate403ApplicationJson withError(CreateTemplate403ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public CreateTemplate403ApplicationJson withStatus(Long status) {
        this.status = status;
        return this;
    }
}