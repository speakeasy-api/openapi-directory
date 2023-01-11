package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAlertFeedbackResponse
 * Response message for an alert feedback listing request.
**/
public class ListAlertFeedbackResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback")
    public AlertFeedback[] feedback;
    public ListAlertFeedbackResponse withFeedback(AlertFeedback[] feedback) {
        this.feedback = feedback;
        return this;
    }
}