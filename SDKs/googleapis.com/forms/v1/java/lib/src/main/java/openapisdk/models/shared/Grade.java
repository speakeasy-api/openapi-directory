package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Grade
 * Grade information associated with a respondent's answer to a question.
**/
public class Grade {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("correct")
    public Boolean correct;
    public Grade withCorrect(Boolean correct) {
        this.correct = correct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback")
    public Feedback feedback;
    public Grade withFeedback(Feedback feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public Grade withScore(Double score) {
        this.score = score;
        return this;
    }
}