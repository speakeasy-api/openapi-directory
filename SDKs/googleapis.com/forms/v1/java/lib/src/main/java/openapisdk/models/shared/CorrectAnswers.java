package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CorrectAnswers
 * The answer key for a question.
**/
public class CorrectAnswers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public CorrectAnswer[] answers;
    public CorrectAnswers withAnswers(CorrectAnswer[] answers) {
        this.answers = answers;
        return this;
    }
}