package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateDefinitionLayout
 * Defines template layout (e.g page format, margins).
**/
public class TemplateDefinitionLayout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emptyLabels")
    public Long emptyLabels;
    public TemplateDefinitionLayout withEmptyLabels(Long emptyLabels) {
        this.emptyLabels = emptyLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public TemplateDefinitionLayoutFormatEnum format;
    public TemplateDefinitionLayout withFormat(TemplateDefinitionLayoutFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Double height;
    public TemplateDefinitionLayout withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("margins")
    public TemplateDefinitionLayoutMargins margins;
    public TemplateDefinitionLayout withMargins(TemplateDefinitionLayoutMargins margins) {
        this.margins = margins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientation")
    public TemplateDefinitionLayoutOrientationEnum orientation;
    public TemplateDefinitionLayout withOrientation(TemplateDefinitionLayoutOrientationEnum orientation) {
        this.orientation = orientation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeatLayout")
    public TemplateDefinitionLayoutRepeatLayout repeatLayout;
    public TemplateDefinitionLayout withRepeatLayout(TemplateDefinitionLayoutRepeatLayout repeatLayout) {
        this.repeatLayout = repeatLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotation")
    public Long rotation;
    public TemplateDefinitionLayout withRotation(Long rotation) {
        this.rotation = rotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public TemplateDefinitionLayoutUnitEnum unit;
    public TemplateDefinitionLayout withUnit(TemplateDefinitionLayoutUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Double width;
    public TemplateDefinitionLayout withWidth(Double width) {
        this.width = width;
        return this;
    }
}