package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveBgJsonResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public RemoveBgJsonResponseData data;
    public RemoveBgJsonResponse withData(RemoveBgJsonResponseData data) {
        this.data = data;
        return this;
    }
}