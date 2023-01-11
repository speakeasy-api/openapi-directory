package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Column
 * Defines the layout properties and content for a column.
**/
public class Column {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public String weight;
    public Column withWeight(String weight) {
        this.weight = weight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widgets")
    public Widget[] widgets;
    public Column withWidgets(Widget[] widgets) {
        this.widgets = widgets;
        return this;
    }
}