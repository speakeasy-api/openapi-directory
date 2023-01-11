package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Transition
 * In and out transitions for a clip - i.e. fade in and fade out
**/
public class Transition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in")
    public TransitionInEnum in;
    public Transition withIn(TransitionInEnum in) {
        this.in = in;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("out")
    public TransitionOutEnum out;
    public Transition withOut(TransitionOutEnum out) {
        this.out = out;
        return this;
    }
}