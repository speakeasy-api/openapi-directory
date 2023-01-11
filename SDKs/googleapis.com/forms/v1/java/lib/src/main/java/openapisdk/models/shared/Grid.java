package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Grid
 * A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
**/
public class Grid {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public ChoiceQuestion columns;
    public Grid withColumns(ChoiceQuestion columns) {
        this.columns = columns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shuffleQuestions")
    public Boolean shuffleQuestions;
    public Grid withShuffleQuestions(Boolean shuffleQuestions) {
        this.shuffleQuestions = shuffleQuestions;
        return this;
    }
}