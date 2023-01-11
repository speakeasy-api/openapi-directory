package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CollapsibleGroup
 * A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets.
**/
public class CollapsibleGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collapsed")
    public Boolean collapsed;
    public CollapsibleGroup withCollapsed(Boolean collapsed) {
        this.collapsed = collapsed;
        return this;
    }
}