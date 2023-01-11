package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FeedbackLoop
 * [Feedback loop](https://support.google.com/mail/answer/6254652) identifier information.
**/
public class FeedbackLoop {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FeedbackLoop withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spamRatio")
    public Double spamRatio;
    public FeedbackLoop withSpamRatio(Double spamRatio) {
        this.spamRatio = spamRatio;
        return this;
    }
}