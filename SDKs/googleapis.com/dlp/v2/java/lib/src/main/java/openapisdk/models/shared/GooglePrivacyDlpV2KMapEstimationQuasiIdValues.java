package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2KMapEstimationQuasiIdValues
 * A tuple of values for the quasi-identifier columns.
**/
public class GooglePrivacyDlpV2KMapEstimationQuasiIdValues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedAnonymity")
    public String estimatedAnonymity;
    public GooglePrivacyDlpV2KMapEstimationQuasiIdValues withEstimatedAnonymity(String estimatedAnonymity) {
        this.estimatedAnonymity = estimatedAnonymity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quasiIdsValues")
    public GooglePrivacyDlpV2Value[] quasiIdsValues;
    public GooglePrivacyDlpV2KMapEstimationQuasiIdValues withQuasiIdsValues(GooglePrivacyDlpV2Value[] quasiIdsValues) {
        this.quasiIdsValues = quasiIdsValues;
        return this;
    }
}