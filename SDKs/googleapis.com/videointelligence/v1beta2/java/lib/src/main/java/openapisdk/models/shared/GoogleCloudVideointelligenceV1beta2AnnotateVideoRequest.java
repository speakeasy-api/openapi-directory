package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest
 * Video annotation request.
**/
public class GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum[] features;
    public GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest withFeatures(GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputContent")
    public String inputContent;
    public GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest withInputContent(String inputContent) {
        this.inputContent = inputContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputUri")
    public String inputUri;
    public GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest withInputUri(String inputUri) {
        this.inputUri = inputUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputUri")
    public String outputUri;
    public GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest withOutputUri(String outputUri) {
        this.outputUri = outputUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoContext")
    public GoogleCloudVideointelligenceV1beta2VideoContext videoContext;
    public GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest withVideoContext(GoogleCloudVideointelligenceV1beta2VideoContext videoContext) {
        this.videoContext = videoContext;
        return this;
    }
}