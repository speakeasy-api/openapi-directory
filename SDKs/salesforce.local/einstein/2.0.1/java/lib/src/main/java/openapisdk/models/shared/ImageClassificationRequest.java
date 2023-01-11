package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class ImageClassificationRequest {
    @JsonProperty("modelId")
@SpeakeasyMetadata("multipartForm:name=modelId")
    public String modelId;
    public ImageClassificationRequest withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numResults")
@SpeakeasyMetadata("multipartForm:name=numResults")
    public Integer numResults;
    public ImageClassificationRequest withNumResults(Integer numResults) {
        this.numResults = numResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleBase64Content")
@SpeakeasyMetadata("multipartForm:name=sampleBase64Content")
    public String sampleBase64Content;
    public ImageClassificationRequest withSampleBase64Content(String sampleBase64Content) {
        this.sampleBase64Content = sampleBase64Content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleId")
@SpeakeasyMetadata("multipartForm:name=sampleId")
    public String sampleId;
    public ImageClassificationRequest withSampleId(String sampleId) {
        this.sampleId = sampleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleLocation")
@SpeakeasyMetadata("multipartForm:name=sampleLocation")
    public String sampleLocation;
    public ImageClassificationRequest withSampleLocation(String sampleLocation) {
        this.sampleLocation = sampleLocation;
        return this;
    }
}