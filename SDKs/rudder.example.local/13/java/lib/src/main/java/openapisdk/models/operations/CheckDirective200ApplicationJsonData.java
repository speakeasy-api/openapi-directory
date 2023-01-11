package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CheckDirective200ApplicationJsonData {
    @JsonProperty("directives")
    public openapisdk.models.shared.Directive[] directives;
    public CheckDirective200ApplicationJsonData withDirectives(openapisdk.models.shared.Directive[] directives) {
        this.directives = directives;
        return this;
    }
}