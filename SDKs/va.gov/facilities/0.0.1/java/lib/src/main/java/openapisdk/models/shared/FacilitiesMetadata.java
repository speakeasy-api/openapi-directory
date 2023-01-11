package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FacilitiesMetadata {
    @JsonProperty("distances")
    public Distance[] distances;
    public FacilitiesMetadata withDistances(Distance[] distances) {
        this.distances = distances;
        return this;
    }
    @JsonProperty("pagination")
    public Pagination pagination;
    public FacilitiesMetadata withPagination(Pagination pagination) {
        this.pagination = pagination;
        return this;
    }
}