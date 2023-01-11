package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DirectiveDetails200ApplicationJsonData {
    @JsonProperty("directives")
    public openapisdk.models.shared.Directive[] directives;
    public DirectiveDetails200ApplicationJsonData withDirectives(openapisdk.models.shared.Directive[] directives) {
        this.directives = directives;
        return this;
    }
}