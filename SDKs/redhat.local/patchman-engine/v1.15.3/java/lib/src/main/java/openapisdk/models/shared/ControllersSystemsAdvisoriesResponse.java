package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersSystemsAdvisoriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, String[]> data;
    public ControllersSystemsAdvisoriesResponse withData(java.util.Map<String, String[]> data) {
        this.data = data;
        return this;
    }
}