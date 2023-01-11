package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageClassificationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public ImageClassificationResponse withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probabilities")
    public LabelResult[] probabilities;
    public ImageClassificationResponse withProbabilities(LabelResult[] probabilities) {
        this.probabilities = probabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleId")
    public String sampleId;
    public ImageClassificationResponse withSampleId(String sampleId) {
        this.sampleId = sampleId;
        return this;
    }
}