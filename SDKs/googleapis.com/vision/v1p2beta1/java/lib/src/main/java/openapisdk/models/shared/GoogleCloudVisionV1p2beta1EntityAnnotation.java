package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1EntityAnnotation
 * Set of detected entity features.
**/
public class GoogleCloudVisionV1p2beta1EntityAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingPoly")
    public GoogleCloudVisionV1p2beta1BoundingPoly boundingPoly;
    public GoogleCloudVisionV1p2beta1EntityAnnotation withBoundingPoly(GoogleCloudVisionV1p2beta1BoundingPoly boundingPoly) {
        this.boundingPoly = boundingPoly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public GoogleCloudVisionV1p2beta1EntityAnnotation withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudVisionV1p2beta1EntityAnnotation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public GoogleCloudVisionV1p2beta1EntityAnnotation withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public GoogleCloudVisionV1p2beta1LocationInfo[] locations;
    public GoogleCloudVisionV1p2beta1EntityAnnotation withLocations(GoogleCloudVisionV1p2beta1LocationInfo[] locations) {
        this.locations = locations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mid")
    public String mid;
    public GoogleCloudVisionV1p2beta1EntityAnnotation withMid(String mid) {
        this.mid = mid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GoogleCloudVisionV1p2beta1Property[] properties;
    public GoogleCloudVisionV1p2beta1EntityAnnotation withProperties(GoogleCloudVisionV1p2beta1Property[] properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public GoogleCloudVisionV1p2beta1EntityAnnotation withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicality")
    public Float topicality;
    public GoogleCloudVisionV1p2beta1EntityAnnotation withTopicality(Float topicality) {
        this.topicality = topicality;
        return this;
    }
}