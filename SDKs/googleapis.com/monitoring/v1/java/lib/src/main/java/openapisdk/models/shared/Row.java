package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Row
 * Defines the layout properties and content for a row.
**/
public class Row {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public String weight;
    public Row withWeight(String weight) {
        this.weight = weight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widgets")
    public Widget[] widgets;
    public Row withWidgets(Widget[] widgets) {
        this.widgets = widgets;
        return this;
    }
}