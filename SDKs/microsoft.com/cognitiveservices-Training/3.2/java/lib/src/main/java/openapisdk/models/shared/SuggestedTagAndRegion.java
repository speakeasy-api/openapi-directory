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
 * SuggestedTagAndRegion
 * Result of a suggested tags and regions request.
**/
public class SuggestedTagAndRegion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public SuggestedTagAndRegion withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SuggestedTagAndRegion withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iteration")
    public String iteration;
    public SuggestedTagAndRegion withIteration(String iteration) {
        this.iteration = iteration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictionUncertainty")
    public Double predictionUncertainty;
    public SuggestedTagAndRegion withPredictionUncertainty(Double predictionUncertainty) {
        this.predictionUncertainty = predictionUncertainty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictions")
    public Prediction[] predictions;
    public SuggestedTagAndRegion withPredictions(Prediction[] predictions) {
        this.predictions = predictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public SuggestedTagAndRegion withProject(String project) {
        this.project = project;
        return this;
    }
}