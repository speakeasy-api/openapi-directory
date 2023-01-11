package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TemplatePropertyParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default")
    public String default_;
    public TemplatePropertyParameters withDefault(String default_) {
        this.default_ = default_;
        return this;
    }
}