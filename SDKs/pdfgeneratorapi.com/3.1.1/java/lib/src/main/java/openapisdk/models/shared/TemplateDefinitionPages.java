package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TemplateDefinitionPages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("components")
    public Component[] components;
    public TemplateDefinitionPages withComponents(Component[] components) {
        this.components = components;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Double height;
    public TemplateDefinitionPages withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("margins")
    public TemplateDefinitionPagesMargins margins;
    public TemplateDefinitionPages withMargins(TemplateDefinitionPagesMargins margins) {
        this.margins = margins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Double width;
    public TemplateDefinitionPages withWidth(Double width) {
        this.width = width;
        return this;
    }
}