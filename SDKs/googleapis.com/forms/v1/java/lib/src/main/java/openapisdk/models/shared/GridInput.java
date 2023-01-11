package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GridInput
 * A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
**/
public class GridInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public ChoiceQuestionInput columns;
    public GridInput withColumns(ChoiceQuestionInput columns) {
        this.columns = columns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shuffleQuestions")
    public Boolean shuffleQuestions;
    public GridInput withShuffleQuestions(Boolean shuffleQuestions) {
        this.shuffleQuestions = shuffleQuestions;
        return this;
    }
}