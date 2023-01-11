package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Diagnostic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public Diagnostic withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public DiagnosticLevelEnum level;
    public Diagnostic withLevel(DiagnosticLevelEnum level) {
        this.level = level;
        return this;
    }
}