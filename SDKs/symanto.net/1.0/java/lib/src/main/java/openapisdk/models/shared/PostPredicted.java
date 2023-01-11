package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPredicted {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostPredicted withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("predictions")
    public Prediction[] predictions;
    public PostPredicted withPredictions(Prediction[] predictions) {
        this.predictions = predictions;
        return this;
    }
}