package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateDefinitionNewLayoutMargins
 * Page margins in units
**/
public class TemplateDefinitionNewLayoutMargins {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bottom")
    public Double bottom;
    public TemplateDefinitionNewLayoutMargins withBottom(Double bottom) {
        this.bottom = bottom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("left")
    public Double left;
    public TemplateDefinitionNewLayoutMargins withLeft(Double left) {
        this.left = left;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("right")
    public Double right;
    public TemplateDefinitionNewLayoutMargins withRight(Double right) {
        this.right = right;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("top")
    public Double top;
    public TemplateDefinitionNewLayoutMargins withTop(Double top) {
        this.top = top;
        return this;
    }
}