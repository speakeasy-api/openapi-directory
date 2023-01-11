package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidenceThreshold")
    public Float confidenceThreshold;
    public GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry withConfidenceThreshold(Float confidenceThreshold) {
        this.confidenceThreshold = confidenceThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("f1Score")
    public Float f1Score;
    public GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry withF1Score(Float f1Score) {
        this.f1Score = f1Score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("f1ScoreAt1")
    public Float f1ScoreAt1;
    public GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry withF1ScoreAt1(Float f1ScoreAt1) {
        this.f1ScoreAt1 = f1ScoreAt1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("f1ScoreAt5")
    public Float f1ScoreAt5;
    public GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry withF1ScoreAt5(Float f1ScoreAt5) {
        this.f1ScoreAt5 = f1ScoreAt5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precision")
    public Float precision;
    public GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry withPrecision(Float precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precisionAt1")
    public Float precisionAt1;
    public GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry withPrecisionAt1(Float precisionAt1) {
        this.precisionAt1 = precisionAt1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precisionAt5")
    public Float precisionAt5;
    public GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry withPrecisionAt5(Float precisionAt5) {
        this.precisionAt5 = precisionAt5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recall")
    public Float recall;
    public GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry withRecall(Float recall) {
        this.recall = recall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recallAt1")
    public Float recallAt1;
    public GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry withRecallAt1(Float recallAt1) {
        this.recallAt1 = recallAt1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recallAt5")
    public Float recallAt5;
    public GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry withRecallAt5(Float recallAt5) {
        this.recallAt5 = recallAt5;
        return this;
    }
}