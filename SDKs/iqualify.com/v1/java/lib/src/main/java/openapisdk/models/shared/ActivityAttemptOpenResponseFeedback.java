package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityAttemptOpenResponseFeedback {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facilitatorEmail")
    public String facilitatorEmail;
    public ActivityAttemptOpenResponseFeedback withFacilitatorEmail(String facilitatorEmail) {
        this.facilitatorEmail = facilitatorEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public ActivityAttemptOpenResponseFeedback withText(String text) {
        this.text = text;
        return this;
    }
}