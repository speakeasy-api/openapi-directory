package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Prediction {
    @JsonProperty("prediction")
    public String prediction;
    public Prediction withPrediction(String prediction) {
        this.prediction = prediction;
        return this;
    }
    @JsonProperty("probability")
    public Double probability;
    public Prediction withProbability(Double probability) {
        this.probability = probability;
        return this;
    }
}