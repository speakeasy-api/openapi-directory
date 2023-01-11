package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TemplateDefinitionNewPagesMargins {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bottom")
    public Double bottom;
    public TemplateDefinitionNewPagesMargins withBottom(Double bottom) {
        this.bottom = bottom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("right")
    public Double right;
    public TemplateDefinitionNewPagesMargins withRight(Double right) {
        this.right = right;
        return this;
    }
}