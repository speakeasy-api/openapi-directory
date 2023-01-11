package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextAnswers
 * A question's answers as text.
**/
public class TextAnswers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public TextAnswer[] answers;
    public TextAnswers withAnswers(TextAnswer[] answers) {
        this.answers = answers;
        return this;
    }
}