package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public Object[] errors;
    public UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Result")
    public UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonResult[] result;
    public UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson withResult(UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonResult[] result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public Double status;
    public UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson withStatus(Double status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
}