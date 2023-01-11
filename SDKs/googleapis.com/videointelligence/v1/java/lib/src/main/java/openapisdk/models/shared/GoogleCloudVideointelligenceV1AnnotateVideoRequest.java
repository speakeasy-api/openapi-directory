package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1AnnotateVideoRequest
 * Video annotation request.
**/
public class GoogleCloudVideointelligenceV1AnnotateVideoRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum[] features;
    public GoogleCloudVideointelligenceV1AnnotateVideoRequest withFeatures(GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputContent")
    public String inputContent;
    public GoogleCloudVideointelligenceV1AnnotateVideoRequest withInputContent(String inputContent) {
        this.inputContent = inputContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputUri")
    public String inputUri;
    public GoogleCloudVideointelligenceV1AnnotateVideoRequest withInputUri(String inputUri) {
        this.inputUri = inputUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public GoogleCloudVideointelligenceV1AnnotateVideoRequest withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputUri")
    public String outputUri;
    public GoogleCloudVideointelligenceV1AnnotateVideoRequest withOutputUri(String outputUri) {
        this.outputUri = outputUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoContext")
    public GoogleCloudVideointelligenceV1VideoContext videoContext;
    public GoogleCloudVideointelligenceV1AnnotateVideoRequest withVideoContext(GoogleCloudVideointelligenceV1VideoContext videoContext) {
        this.videoContext = videoContext;
        return this;
    }
}