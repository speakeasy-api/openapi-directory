package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GridLayout
 * A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy.
**/
public class GridLayout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public String columns;
    public GridLayout withColumns(String columns) {
        this.columns = columns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widgets")
    public Widget[] widgets;
    public GridLayout withWidgets(Widget[] widgets) {
        this.widgets = widgets;
        return this;
    }
}