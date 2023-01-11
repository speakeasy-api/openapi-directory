package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FacilityReadResponse {
    @JsonProperty("data")
    public Facility data;
    public FacilityReadResponse withData(Facility data) {
        this.data = data;
        return this;
    }
}