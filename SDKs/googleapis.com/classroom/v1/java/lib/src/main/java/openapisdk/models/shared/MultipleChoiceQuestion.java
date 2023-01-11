package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MultipleChoiceQuestion
 * Additional details for multiple-choice questions.
**/
public class MultipleChoiceQuestion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("choices")
    public String[] choices;
    public MultipleChoiceQuestion withChoices(String[] choices) {
        this.choices = choices;
        return this;
    }
}