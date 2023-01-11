package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Layer
 * Layer holds metadata specific to a layer of a Docker image.
**/
public class Layer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arguments")
    public String arguments;
    public Layer withArguments(String arguments) {
        this.arguments = arguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directive")
    public String directive;
    public Layer withDirective(String directive) {
        this.directive = directive;
        return this;
    }
}