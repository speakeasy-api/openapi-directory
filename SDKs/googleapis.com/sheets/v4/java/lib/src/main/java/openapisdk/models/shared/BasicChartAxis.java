package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicChartAxis
 * An axis of the chart. A chart may not have more than one axis per axis position.
**/
public class BasicChartAxis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public TextFormat format;
    public BasicChartAxis withFormat(TextFormat format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public BasicChartAxisPositionEnum position;
    public BasicChartAxis withPosition(BasicChartAxisPositionEnum position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public BasicChartAxis withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("titleTextPosition")
    public TextPosition titleTextPosition;
    public BasicChartAxis withTitleTextPosition(TextPosition titleTextPosition) {
        this.titleTextPosition = titleTextPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewWindowOptions")
    public ChartAxisViewWindowOptions viewWindowOptions;
    public BasicChartAxis withViewWindowOptions(ChartAxisViewWindowOptions viewWindowOptions) {
        this.viewWindowOptions = viewWindowOptions;
        return this;
    }
}