package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientProfileNpsAverage
 * information for all nps survey that this client completed
**/
public class ClientProfileNpsAverage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completed_surveys_count")
    public Double completedSurveysCount;
    public ClientProfileNpsAverage withCompletedSurveysCount(Double completedSurveysCount) {
        this.completedSurveysCount = completedSurveysCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public ClientProfileNpsAverage withScore(Float score) {
        this.score = score;
        return this;
    }
}