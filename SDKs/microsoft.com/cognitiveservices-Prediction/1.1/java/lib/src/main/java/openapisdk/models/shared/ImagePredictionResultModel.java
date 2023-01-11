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
 * ImagePredictionResultModel
 * result of an image prediction request
**/
public class ImagePredictionResultModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Created")
    public OffsetDateTime created;
    public ImagePredictionResultModel withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ImagePredictionResultModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Iteration")
    public String iteration;
    public ImagePredictionResultModel withIteration(String iteration) {
        this.iteration = iteration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Predictions")
    public ImageTagPredictionModel[] predictions;
    public ImagePredictionResultModel withPredictions(ImageTagPredictionModel[] predictions) {
        this.predictions = predictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Project")
    public String project;
    public ImagePredictionResultModel withProject(String project) {
        this.project = project;
        return this;
    }
}