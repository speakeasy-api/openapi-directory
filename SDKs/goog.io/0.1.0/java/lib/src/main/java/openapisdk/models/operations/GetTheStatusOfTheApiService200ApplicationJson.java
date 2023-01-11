package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTheStatusOfTheApiService200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Boolean status;
    public GetTheStatusOfTheApiService200ApplicationJson withStatus(Boolean status) {
        this.status = status;
        return this;
    }
}