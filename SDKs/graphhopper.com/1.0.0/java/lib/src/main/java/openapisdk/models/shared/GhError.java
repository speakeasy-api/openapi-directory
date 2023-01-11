package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GhError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hints")
    public GhErrorHints[] hints;
    public GhError withHints(GhErrorHints[] hints) {
        this.hints = hints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GhError withMessage(String message) {
        this.message = message;
        return this;
    }
}