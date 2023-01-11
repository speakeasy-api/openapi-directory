package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SortedDimension
 * Represents a sorted dimension.
**/
public class SortedDimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SortedDimension withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SortedDimension withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public SortedDimensionSortOrderEnum sortOrder;
    public SortedDimension withSortOrder(SortedDimensionSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}