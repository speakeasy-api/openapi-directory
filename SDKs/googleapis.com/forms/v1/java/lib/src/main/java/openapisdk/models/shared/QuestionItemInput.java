package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuestionItemInput
 * A form item containing a single question.
**/
public class QuestionItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ImageInput image;
    public QuestionItemInput withImage(ImageInput image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question")
    public QuestionInput question;
    public QuestionItemInput withQuestion(QuestionInput question) {
        this.question = question;
        return this;
    }
}