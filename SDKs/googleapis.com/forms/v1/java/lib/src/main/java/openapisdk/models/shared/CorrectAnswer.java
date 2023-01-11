package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CorrectAnswer
 * A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer`s may be needed to represent a single correct response option.
**/
public class CorrectAnswer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public CorrectAnswer withValue(String value) {
        this.value = value;
        return this;
    }
}