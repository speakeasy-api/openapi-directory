package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MultipleChoiceSubmission
 * Student work for a multiple-choice question.
**/
public class MultipleChoiceSubmission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer")
    public String answer;
    public MultipleChoiceSubmission withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
}