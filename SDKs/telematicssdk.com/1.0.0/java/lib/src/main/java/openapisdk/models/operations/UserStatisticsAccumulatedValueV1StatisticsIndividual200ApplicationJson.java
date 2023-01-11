package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public Object[] errors;
    public UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Result")
    public UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult result;
    public UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson withResult(UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public Double status;
    public UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson withStatus(Double status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
}