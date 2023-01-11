package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersSystemDetailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ControllersSystemItem data;
    public ControllersSystemDetailResponse withData(ControllersSystemItem data) {
        this.data = data;
        return this;
    }
}