package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomEventStatus
 * The original custom event that was inserted and whether there were any errors.
**/
public class CustomEventStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customEvent")
    public CustomEvent customEvent;
    public CustomEventStatus withCustomEvent(CustomEvent customEvent) {
        this.customEvent = customEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public CustomEventError[] errors;
    public CustomEventStatus withErrors(CustomEventError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CustomEventStatus withKind(String kind) {
        this.kind = kind;
        return this;
    }
}