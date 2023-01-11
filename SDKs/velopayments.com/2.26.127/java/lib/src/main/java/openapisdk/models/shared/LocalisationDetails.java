package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocalisationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String> parameters;
    public LocalisationDetails withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public String template;
    public LocalisationDetails withTemplate(String template) {
        this.template = template;
        return this;
    }
}