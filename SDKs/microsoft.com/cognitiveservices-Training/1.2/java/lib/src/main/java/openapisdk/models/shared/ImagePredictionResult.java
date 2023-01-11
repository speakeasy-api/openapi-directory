package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ImagePredictionResult
 * result of an image prediction request
**/
public class ImagePredictionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Created")
    public OffsetDateTime created;
    public ImagePredictionResult withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ImagePredictionResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Iteration")
    public String iteration;
    public ImagePredictionResult withIteration(String iteration) {
        this.iteration = iteration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Predictions")
    public ImageTagPrediction[] predictions;
    public ImagePredictionResult withPredictions(ImageTagPrediction[] predictions) {
        this.predictions = predictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Project")
    public String project;
    public ImagePredictionResult withProject(String project) {
        this.project = project;
        return this;
    }
}