package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChartAxisViewWindowOptions
 * The options that define a "view window" for a chart (such as the visible values in an axis).
**/
public class ChartAxisViewWindowOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewWindowMax")
    public Double viewWindowMax;
    public ChartAxisViewWindowOptions withViewWindowMax(Double viewWindowMax) {
        this.viewWindowMax = viewWindowMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewWindowMin")
    public Double viewWindowMin;
    public ChartAxisViewWindowOptions withViewWindowMin(Double viewWindowMin) {
        this.viewWindowMin = viewWindowMin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewWindowMode")
    public ChartAxisViewWindowOptionsViewWindowModeEnum viewWindowMode;
    public ChartAxisViewWindowOptions withViewWindowMode(ChartAxisViewWindowOptionsViewWindowModeEnum viewWindowMode) {
        this.viewWindowMode = viewWindowMode;
        return this;
    }
}