package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTechniqueVersionDirectives200ApplicationJsonData {
    @JsonProperty("directives")
    public openapisdk.models.shared.Directive[] directives;
    public ListTechniqueVersionDirectives200ApplicationJsonData withDirectives(openapisdk.models.shared.Directive[] directives) {
        this.directives = directives;
        return this;
    }
}