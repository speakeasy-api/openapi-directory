package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PivotGroupValueMetadata
 * Metadata about a value in a pivot grouping.
**/
public class PivotGroupValueMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collapsed")
    public Boolean collapsed;
    public PivotGroupValueMetadata withCollapsed(Boolean collapsed) {
        this.collapsed = collapsed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public ExtendedValue value;
    public PivotGroupValueMetadata withValue(ExtendedValue value) {
        this.value = value;
        return this;
    }
}