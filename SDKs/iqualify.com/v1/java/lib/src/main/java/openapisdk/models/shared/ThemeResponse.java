package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ThemeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public ThemeResponse withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfQuestions")
    public String numberOfQuestions;
    public ThemeResponse withNumberOfQuestions(String numberOfQuestions) {
        this.numberOfQuestions = numberOfQuestions;
        return this;
    }
}