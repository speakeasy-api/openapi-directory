package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxonomyAttractionsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destId")
    public Long destId;
    public TaxonomyAttractionsRequestBody withDestId(Long destId) {
        this.destId = destId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public TaxonomyAttractionsRequestBodySortOrderEnum sortOrder;
    public TaxonomyAttractionsRequestBody withSortOrder(TaxonomyAttractionsRequestBodySortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topX")
    public String topX;
    public TaxonomyAttractionsRequestBody withTopX(String topX) {
        this.topX = topX;
        return this;
    }
}