package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class IntentPredictRequest {
    @JsonProperty("document")
@SpeakeasyMetadata("multipartForm:name=document")
    public String document;
    public IntentPredictRequest withDocument(String document) {
        this.document = document;
        return this;
    }
    @JsonProperty("modelId")
@SpeakeasyMetadata("multipartForm:name=modelId")
    public String modelId;
    public IntentPredictRequest withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numResults")
@SpeakeasyMetadata("multipartForm:name=numResults")
    public Integer numResults;
    public IntentPredictRequest withNumResults(Integer numResults) {
        this.numResults = numResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleId")
@SpeakeasyMetadata("multipartForm:name=sampleId")
    public String sampleId;
    public IntentPredictRequest withSampleId(String sampleId) {
        this.sampleId = sampleId;
        return this;
    }
}