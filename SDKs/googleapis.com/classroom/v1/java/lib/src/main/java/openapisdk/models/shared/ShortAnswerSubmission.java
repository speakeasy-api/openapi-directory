package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShortAnswerSubmission
 * Student work for a short answer question.
**/
public class ShortAnswerSubmission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer")
    public String answer;
    public ShortAnswerSubmission withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
}