package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VariantOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public Option[] options;
    public VariantOptionsResponse withOptions(Option[] options) {
        this.options = options;
        return this;
    }
}