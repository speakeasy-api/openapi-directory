package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class ObjectDetectionRequest {
    @JsonProperty("modelId")
@SpeakeasyMetadata("multipartForm:name=modelId")
    public String modelId;
    public ObjectDetectionRequest withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleBase64Content")
@SpeakeasyMetadata("multipartForm:name=sampleBase64Content")
    public String sampleBase64Content;
    public ObjectDetectionRequest withSampleBase64Content(String sampleBase64Content) {
        this.sampleBase64Content = sampleBase64Content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleId")
@SpeakeasyMetadata("multipartForm:name=sampleId")
    public String sampleId;
    public ObjectDetectionRequest withSampleId(String sampleId) {
        this.sampleId = sampleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleLocation")
@SpeakeasyMetadata("multipartForm:name=sampleLocation")
    public String sampleLocation;
    public ObjectDetectionRequest withSampleLocation(String sampleLocation) {
        this.sampleLocation = sampleLocation;
        return this;
    }
}