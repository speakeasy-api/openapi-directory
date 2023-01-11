package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActiveWidgetList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PagingMeta meta;
    public ActiveWidgetList withMeta(PagingMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widgets")
    public ActiveWidget[] widgets;
    public ActiveWidgetList withWidgets(ActiveWidget[] widgets) {
        this.widgets = widgets;
        return this;
    }
}