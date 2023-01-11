package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FacilitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Facility[] data;
    public FacilitiesResponse withData(Facility[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("links")
    public PageLinks links;
    public FacilitiesResponse withLinks(PageLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public FacilitiesMetadata meta;
    public FacilitiesResponse withMeta(FacilitiesMetadata meta) {
        this.meta = meta;
        return this;
    }
}