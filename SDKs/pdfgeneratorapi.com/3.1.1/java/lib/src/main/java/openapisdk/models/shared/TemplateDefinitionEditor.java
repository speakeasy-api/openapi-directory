package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateDefinitionEditor
 * Configuration preferences for the editor
**/
public class TemplateDefinitionEditor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heightMultiplier")
    public Double heightMultiplier;
    public TemplateDefinitionEditor withHeightMultiplier(Double heightMultiplier) {
        this.heightMultiplier = heightMultiplier;
        return this;
    }
}