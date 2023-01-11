package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig
 * Provides details for how an evaluation job sends email alerts based on the results of a run.
**/
public class GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minAcceptableMeanAveragePrecision")
    public Double minAcceptableMeanAveragePrecision;
    public GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig withMinAcceptableMeanAveragePrecision(Double minAcceptableMeanAveragePrecision) {
        this.minAcceptableMeanAveragePrecision = minAcceptableMeanAveragePrecision;
        return this;
    }
}