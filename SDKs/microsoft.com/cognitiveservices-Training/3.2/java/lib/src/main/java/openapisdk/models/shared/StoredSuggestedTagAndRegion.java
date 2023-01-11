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
 * StoredSuggestedTagAndRegion
 * Result of a suggested tags and regions request of the untagged image.
**/
public class StoredSuggestedTagAndRegion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public StoredSuggestedTagAndRegion withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public StoredSuggestedTagAndRegion withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public StoredSuggestedTagAndRegion withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public StoredSuggestedTagAndRegion withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iteration")
    public String iteration;
    public StoredSuggestedTagAndRegion withIteration(String iteration) {
        this.iteration = iteration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalImageUri")
    public String originalImageUri;
    public StoredSuggestedTagAndRegion withOriginalImageUri(String originalImageUri) {
        this.originalImageUri = originalImageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictionUncertainty")
    public Double predictionUncertainty;
    public StoredSuggestedTagAndRegion withPredictionUncertainty(Double predictionUncertainty) {
        this.predictionUncertainty = predictionUncertainty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictions")
    public Prediction[] predictions;
    public StoredSuggestedTagAndRegion withPredictions(Prediction[] predictions) {
        this.predictions = predictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public StoredSuggestedTagAndRegion withProject(String project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resizedImageUri")
    public String resizedImageUri;
    public StoredSuggestedTagAndRegion withResizedImageUri(String resizedImageUri) {
        this.resizedImageUri = resizedImageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailUri")
    public String thumbnailUri;
    public StoredSuggestedTagAndRegion withThumbnailUri(String thumbnailUri) {
        this.thumbnailUri = thumbnailUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public StoredSuggestedTagAndRegion withWidth(Integer width) {
        this.width = width;
        return this;
    }
}