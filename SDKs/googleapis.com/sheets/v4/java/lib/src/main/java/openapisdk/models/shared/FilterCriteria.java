package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FilterCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public BooleanCondition condition;
    public FilterCriteria withCondition(BooleanCondition condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiddenValues")
    public String[] hiddenValues;
    public FilterCriteria withHiddenValues(String[] hiddenValues) {
        this.hiddenValues = hiddenValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibleBackgroundColor")
    public Color visibleBackgroundColor;
    public FilterCriteria withVisibleBackgroundColor(Color visibleBackgroundColor) {
        this.visibleBackgroundColor = visibleBackgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibleBackgroundColorStyle")
    public ColorStyle visibleBackgroundColorStyle;
    public FilterCriteria withVisibleBackgroundColorStyle(ColorStyle visibleBackgroundColorStyle) {
        this.visibleBackgroundColorStyle = visibleBackgroundColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibleForegroundColor")
    public Color visibleForegroundColor;
    public FilterCriteria withVisibleForegroundColor(Color visibleForegroundColor) {
        this.visibleForegroundColor = visibleForegroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibleForegroundColorStyle")
    public ColorStyle visibleForegroundColorStyle;
    public FilterCriteria withVisibleForegroundColorStyle(ColorStyle visibleForegroundColorStyle) {
        this.visibleForegroundColorStyle = visibleForegroundColorStyle;
        return this;
    }
}