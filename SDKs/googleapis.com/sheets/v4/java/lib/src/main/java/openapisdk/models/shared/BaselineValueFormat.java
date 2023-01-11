package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BaselineValueFormat
 * Formatting options for baseline value.
**/
public class BaselineValueFormat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonType")
    public BaselineValueFormatComparisonTypeEnum comparisonType;
    public BaselineValueFormat withComparisonType(BaselineValueFormatComparisonTypeEnum comparisonType) {
        this.comparisonType = comparisonType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BaselineValueFormat withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeColor")
    public Color negativeColor;
    public BaselineValueFormat withNegativeColor(Color negativeColor) {
        this.negativeColor = negativeColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeColorStyle")
    public ColorStyle negativeColorStyle;
    public BaselineValueFormat withNegativeColorStyle(ColorStyle negativeColorStyle) {
        this.negativeColorStyle = negativeColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public TextPosition position;
    public BaselineValueFormat withPosition(TextPosition position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positiveColor")
    public Color positiveColor;
    public BaselineValueFormat withPositiveColor(Color positiveColor) {
        this.positiveColor = positiveColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positiveColorStyle")
    public ColorStyle positiveColorStyle;
    public BaselineValueFormat withPositiveColorStyle(ColorStyle positiveColorStyle) {
        this.positiveColorStyle = positiveColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textFormat")
    public TextFormat textFormat;
    public BaselineValueFormat withTextFormat(TextFormat textFormat) {
        this.textFormat = textFormat;
        return this;
    }
}