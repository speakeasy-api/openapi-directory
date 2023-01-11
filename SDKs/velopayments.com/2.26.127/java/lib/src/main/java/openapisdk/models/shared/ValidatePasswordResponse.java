package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidatePasswordResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Integer score;
    public ValidatePasswordResponse withScore(Integer score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestions")
    public String[] suggestions;
    public ValidatePasswordResponse withSuggestions(String[] suggestions) {
        this.suggestions = suggestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valid")
    public Boolean valid;
    public ValidatePasswordResponse withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warning")
    public String warning;
    public ValidatePasswordResponse withWarning(String warning) {
        this.warning = warning;
        return this;
    }
}