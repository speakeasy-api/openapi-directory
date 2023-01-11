package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRegionsResponse {
    @JsonProperty("regions")
    public java.util.Map<String, Object> regions;
    public GetRegionsResponse withRegions(java.util.Map<String, Object> regions) {
        this.regions = regions;
        return this;
    }
}