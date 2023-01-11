package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChoiceQuestionInput
 * A radio/checkbox/dropdown question.
**/
public class ChoiceQuestionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public OptionInput[] options;
    public ChoiceQuestionInput withOptions(OptionInput[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shuffle")
    public Boolean shuffle;
    public ChoiceQuestionInput withShuffle(Boolean shuffle) {
        this.shuffle = shuffle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ChoiceQuestionTypeEnum type;
    public ChoiceQuestionInput withType(ChoiceQuestionTypeEnum type) {
        this.type = type;
        return this;
    }
}