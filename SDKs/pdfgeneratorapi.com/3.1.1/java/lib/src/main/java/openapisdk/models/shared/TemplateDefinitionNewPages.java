package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TemplateDefinitionNewPages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("components")
    public Component[] components;
    public TemplateDefinitionNewPages withComponents(Component[] components) {
        this.components = components;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Double height;
    public TemplateDefinitionNewPages withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("margins")
    public TemplateDefinitionNewPagesMargins margins;
    public TemplateDefinitionNewPages withMargins(TemplateDefinitionNewPagesMargins margins) {
        this.margins = margins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Double width;
    public TemplateDefinitionNewPages withWidth(Double width) {
        this.width = width;
        return this;
    }
}