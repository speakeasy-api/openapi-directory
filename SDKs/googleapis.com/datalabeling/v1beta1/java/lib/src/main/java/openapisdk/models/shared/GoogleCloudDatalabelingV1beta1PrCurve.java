package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudDatalabelingV1beta1PrCurve {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpec")
    public GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec;
    public GoogleCloudDatalabelingV1beta1PrCurve withAnnotationSpec(GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec) {
        this.annotationSpec = annotationSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("areaUnderCurve")
    public Float areaUnderCurve;
    public GoogleCloudDatalabelingV1beta1PrCurve withAreaUnderCurve(Float areaUnderCurve) {
        this.areaUnderCurve = areaUnderCurve;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidenceMetricsEntries")
    public GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry[] confidenceMetricsEntries;
    public GoogleCloudDatalabelingV1beta1PrCurve withConfidenceMetricsEntries(GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry[] confidenceMetricsEntries) {
        this.confidenceMetricsEntries = confidenceMetricsEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meanAveragePrecision")
    public Float meanAveragePrecision;
    public GoogleCloudDatalabelingV1beta1PrCurve withMeanAveragePrecision(Float meanAveragePrecision) {
        this.meanAveragePrecision = meanAveragePrecision;
        return this;
    }
}