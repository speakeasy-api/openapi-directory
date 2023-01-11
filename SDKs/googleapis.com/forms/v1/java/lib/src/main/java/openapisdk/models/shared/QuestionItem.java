package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuestionItem
 * A form item containing a single question.
**/
public class QuestionItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public QuestionItem withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question")
    public Question question;
    public QuestionItem withQuestion(Question question) {
        this.question = question;
        return this;
    }
}