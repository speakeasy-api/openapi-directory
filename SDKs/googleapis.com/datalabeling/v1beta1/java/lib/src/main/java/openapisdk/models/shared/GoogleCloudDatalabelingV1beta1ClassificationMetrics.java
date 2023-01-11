package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ClassificationMetrics
 * Metrics calculated for a classification model.
**/
public class GoogleCloudDatalabelingV1beta1ClassificationMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confusionMatrix")
    public GoogleCloudDatalabelingV1beta1ConfusionMatrix confusionMatrix;
    public GoogleCloudDatalabelingV1beta1ClassificationMetrics withConfusionMatrix(GoogleCloudDatalabelingV1beta1ConfusionMatrix confusionMatrix) {
        this.confusionMatrix = confusionMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prCurve")
    public GoogleCloudDatalabelingV1beta1PrCurve prCurve;
    public GoogleCloudDatalabelingV1beta1ClassificationMetrics withPrCurve(GoogleCloudDatalabelingV1beta1PrCurve prCurve) {
        this.prCurve = prCurve;
        return this;
    }
}