package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues
 * A tuple of values for the quasi-identifier columns.
**/
public class GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedProbability")
    public Double estimatedProbability;
    public GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues withEstimatedProbability(Double estimatedProbability) {
        this.estimatedProbability = estimatedProbability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quasiIdsValues")
    public GooglePrivacyDlpV2Value[] quasiIdsValues;
    public GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues withQuasiIdsValues(GooglePrivacyDlpV2Value[] quasiIdsValues) {
        this.quasiIdsValues = quasiIdsValues;
        return this;
    }
}