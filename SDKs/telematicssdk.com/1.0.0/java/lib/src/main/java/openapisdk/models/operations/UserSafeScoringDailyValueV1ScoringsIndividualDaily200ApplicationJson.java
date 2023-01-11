package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public Object[] errors;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Result")
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult[] result;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson withResult(UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult[] result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public Double status;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson withStatus(Double status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
}