package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CellFormat
 * The format of a cell.
**/
public class CellFormat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColor")
    public Color backgroundColor;
    public CellFormat withBackgroundColor(Color backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColorStyle")
    public ColorStyle backgroundColorStyle;
    public CellFormat withBackgroundColorStyle(ColorStyle backgroundColorStyle) {
        this.backgroundColorStyle = backgroundColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("borders")
    public Borders borders;
    public CellFormat withBorders(Borders borders) {
        this.borders = borders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("horizontalAlignment")
    public CellFormatHorizontalAlignmentEnum horizontalAlignment;
    public CellFormat withHorizontalAlignment(CellFormatHorizontalAlignmentEnum horizontalAlignment) {
        this.horizontalAlignment = horizontalAlignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hyperlinkDisplayType")
    public CellFormatHyperlinkDisplayTypeEnum hyperlinkDisplayType;
    public CellFormat withHyperlinkDisplayType(CellFormatHyperlinkDisplayTypeEnum hyperlinkDisplayType) {
        this.hyperlinkDisplayType = hyperlinkDisplayType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberFormat")
    public NumberFormat numberFormat;
    public CellFormat withNumberFormat(NumberFormat numberFormat) {
        this.numberFormat = numberFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("padding")
    public Padding padding;
    public CellFormat withPadding(Padding padding) {
        this.padding = padding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textDirection")
    public CellFormatTextDirectionEnum textDirection;
    public CellFormat withTextDirection(CellFormatTextDirectionEnum textDirection) {
        this.textDirection = textDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textFormat")
    public TextFormat textFormat;
    public CellFormat withTextFormat(TextFormat textFormat) {
        this.textFormat = textFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textRotation")
    public TextRotation textRotation;
    public CellFormat withTextRotation(TextRotation textRotation) {
        this.textRotation = textRotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verticalAlignment")
    public CellFormatVerticalAlignmentEnum verticalAlignment;
    public CellFormat withVerticalAlignment(CellFormatVerticalAlignmentEnum verticalAlignment) {
        this.verticalAlignment = verticalAlignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wrapStrategy")
    public CellFormatWrapStrategyEnum wrapStrategy;
    public CellFormat withWrapStrategy(CellFormatWrapStrategyEnum wrapStrategy) {
        this.wrapStrategy = wrapStrategy;
        return this;
    }
}