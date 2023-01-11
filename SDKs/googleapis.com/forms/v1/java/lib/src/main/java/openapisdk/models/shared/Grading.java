package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Grading
 * Grading for a single question
**/
public class Grading {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("correctAnswers")
    public CorrectAnswers correctAnswers;
    public Grading withCorrectAnswers(CorrectAnswers correctAnswers) {
        this.correctAnswers = correctAnswers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generalFeedback")
    public Feedback generalFeedback;
    public Grading withGeneralFeedback(Feedback generalFeedback) {
        this.generalFeedback = generalFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointValue")
    public Integer pointValue;
    public Grading withPointValue(Integer pointValue) {
        this.pointValue = pointValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whenRight")
    public Feedback whenRight;
    public Grading withWhenRight(Feedback whenRight) {
        this.whenRight = whenRight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whenWrong")
    public Feedback whenWrong;
    public Grading withWhenWrong(Feedback whenWrong) {
        this.whenWrong = whenWrong;
        return this;
    }
}