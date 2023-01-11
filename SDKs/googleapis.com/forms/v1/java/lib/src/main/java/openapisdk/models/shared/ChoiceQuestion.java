package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChoiceQuestion
 * A radio/checkbox/dropdown question.
**/
public class ChoiceQuestion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public Option[] options;
    public ChoiceQuestion withOptions(Option[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shuffle")
    public Boolean shuffle;
    public ChoiceQuestion withShuffle(Boolean shuffle) {
        this.shuffle = shuffle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ChoiceQuestionTypeEnum type;
    public ChoiceQuestion withType(ChoiceQuestionTypeEnum type) {
        this.type = type;
        return this;
    }
}