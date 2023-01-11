package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateDefinitionLayoutRepeatLayout
 * Defines page size if layout is repeated on the page e.g sheet labels
**/
public class TemplateDefinitionLayoutRepeatLayout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public TemplateDefinitionLayoutRepeatLayoutFormatEnum format;
    public TemplateDefinitionLayoutRepeatLayout withFormat(TemplateDefinitionLayoutRepeatLayoutFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Double height;
    public TemplateDefinitionLayoutRepeatLayout withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Double width;
    public TemplateDefinitionLayoutRepeatLayout withWidth(Double width) {
        this.width = width;
        return this;
    }
}