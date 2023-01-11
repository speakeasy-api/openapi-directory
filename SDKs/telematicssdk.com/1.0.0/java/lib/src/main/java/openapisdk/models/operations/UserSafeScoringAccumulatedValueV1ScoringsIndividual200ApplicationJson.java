package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public Object[] errors;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Result")
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult result;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson withResult(UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public Double status;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson withStatus(Double status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
}