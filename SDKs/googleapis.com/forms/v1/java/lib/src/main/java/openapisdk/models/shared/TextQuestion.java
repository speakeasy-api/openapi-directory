package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextQuestion
 * A text-based question.
**/
public class TextQuestion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paragraph")
    public Boolean paragraph;
    public TextQuestion withParagraph(Boolean paragraph) {
        this.paragraph = paragraph;
        return this;
    }
}