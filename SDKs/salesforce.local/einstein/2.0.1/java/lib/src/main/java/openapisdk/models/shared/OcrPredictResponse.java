package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OcrPredictResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public OcrPredictResponse withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probabilities")
    public OcrResult[] probabilities;
    public OcrPredictResponse withProbabilities(OcrResult[] probabilities) {
        this.probabilities = probabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleId")
    public String sampleId;
    public OcrPredictResponse withSampleId(String sampleId) {
        this.sampleId = sampleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task")
    public String task;
    public OcrPredictResponse withTask(String task) {
        this.task = task;
        return this;
    }
}