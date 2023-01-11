package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateDefinitionNewLayout
 * Defines template layout (e.g page format, margins).
**/
public class TemplateDefinitionNewLayout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emptyLabels")
    public Long emptyLabels;
    public TemplateDefinitionNewLayout withEmptyLabels(Long emptyLabels) {
        this.emptyLabels = emptyLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public TemplateDefinitionNewLayoutFormatEnum format;
    public TemplateDefinitionNewLayout withFormat(TemplateDefinitionNewLayoutFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Double height;
    public TemplateDefinitionNewLayout withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("margins")
    public TemplateDefinitionNewLayoutMargins margins;
    public TemplateDefinitionNewLayout withMargins(TemplateDefinitionNewLayoutMargins margins) {
        this.margins = margins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientation")
    public TemplateDefinitionNewLayoutOrientationEnum orientation;
    public TemplateDefinitionNewLayout withOrientation(TemplateDefinitionNewLayoutOrientationEnum orientation) {
        this.orientation = orientation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeatLayout")
    public TemplateDefinitionNewLayoutRepeatLayout repeatLayout;
    public TemplateDefinitionNewLayout withRepeatLayout(TemplateDefinitionNewLayoutRepeatLayout repeatLayout) {
        this.repeatLayout = repeatLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotaion")
    public Long rotaion;
    public TemplateDefinitionNewLayout withRotaion(Long rotaion) {
        this.rotaion = rotaion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public TemplateDefinitionNewLayoutUnitEnum unit;
    public TemplateDefinitionNewLayout withUnit(TemplateDefinitionNewLayoutUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Double width;
    public TemplateDefinitionNewLayout withWidth(Double width) {
        this.width = width;
        return this;
    }
}