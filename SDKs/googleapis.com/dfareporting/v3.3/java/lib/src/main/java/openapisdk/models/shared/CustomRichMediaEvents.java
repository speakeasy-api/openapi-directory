package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomRichMediaEvents
 * Represents a Custom Rich Media Events group.
**/
public class CustomRichMediaEvents {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filteredEventIds")
    public DimensionValue[] filteredEventIds;
    public CustomRichMediaEvents withFilteredEventIds(DimensionValue[] filteredEventIds) {
        this.filteredEventIds = filteredEventIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CustomRichMediaEvents withKind(String kind) {
        this.kind = kind;
        return this;
    }
}