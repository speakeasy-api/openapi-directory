package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FeedbackLoopOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedbackCredits")
    public Long feedbackCredits;
    public FeedbackLoopOut withFeedbackCredits(Long feedbackCredits) {
        this.feedbackCredits = feedbackCredits;
        return this;
    }
}