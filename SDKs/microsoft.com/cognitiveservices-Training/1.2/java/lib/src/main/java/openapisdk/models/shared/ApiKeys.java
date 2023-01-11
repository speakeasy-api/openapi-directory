package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiKeys {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictionKeys")
    public KeyPair predictionKeys;
    public ApiKeys withPredictionKeys(KeyPair predictionKeys) {
        this.predictionKeys = predictionKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrainingKeys")
    public KeyPair trainingKeys;
    public ApiKeys withTrainingKeys(KeyPair trainingKeys) {
        this.trainingKeys = trainingKeys;
        return this;
    }
}