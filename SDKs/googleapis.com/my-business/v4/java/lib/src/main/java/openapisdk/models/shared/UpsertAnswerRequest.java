package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpsertAnswerRequest
 * Request message for QuestionsAndAnswers.UpsertAnswer
**/
public class UpsertAnswerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer")
    public Answer answer;
    public UpsertAnswerRequest withAnswer(Answer answer) {
        this.answer = answer;
        return this;
    }
}