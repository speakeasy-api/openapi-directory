package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2KMapEstimationConfig
 * Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.
**/
public class GooglePrivacyDlpV2KMapEstimationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auxiliaryTables")
    public GooglePrivacyDlpV2AuxiliaryTable[] auxiliaryTables;
    public GooglePrivacyDlpV2KMapEstimationConfig withAuxiliaryTables(GooglePrivacyDlpV2AuxiliaryTable[] auxiliaryTables) {
        this.auxiliaryTables = auxiliaryTables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quasiIds")
    public GooglePrivacyDlpV2TaggedField[] quasiIds;
    public GooglePrivacyDlpV2KMapEstimationConfig withQuasiIds(GooglePrivacyDlpV2TaggedField[] quasiIds) {
        this.quasiIds = quasiIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public GooglePrivacyDlpV2KMapEstimationConfig withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
}