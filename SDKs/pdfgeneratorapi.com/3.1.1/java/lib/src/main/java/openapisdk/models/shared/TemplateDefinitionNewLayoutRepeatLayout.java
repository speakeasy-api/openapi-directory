package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateDefinitionNewLayoutRepeatLayout
 * Defines page size if layout is repeated on the page e.g sheet labels
**/
public class TemplateDefinitionNewLayoutRepeatLayout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public TemplateDefinitionNewLayoutRepeatLayoutFormatEnum format;
    public TemplateDefinitionNewLayoutRepeatLayout withFormat(TemplateDefinitionNewLayoutRepeatLayoutFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Double height;
    public TemplateDefinitionNewLayoutRepeatLayout withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Double width;
    public TemplateDefinitionNewLayoutRepeatLayout withWidth(Double width) {
        this.width = width;
        return this;
    }
}