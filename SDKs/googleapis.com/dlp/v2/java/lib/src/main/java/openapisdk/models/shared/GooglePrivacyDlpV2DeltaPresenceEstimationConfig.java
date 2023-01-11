package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DeltaPresenceEstimationConfig
 * δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.
**/
public class GooglePrivacyDlpV2DeltaPresenceEstimationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auxiliaryTables")
    public GooglePrivacyDlpV2StatisticalTable[] auxiliaryTables;
    public GooglePrivacyDlpV2DeltaPresenceEstimationConfig withAuxiliaryTables(GooglePrivacyDlpV2StatisticalTable[] auxiliaryTables) {
        this.auxiliaryTables = auxiliaryTables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quasiIds")
    public GooglePrivacyDlpV2QuasiId[] quasiIds;
    public GooglePrivacyDlpV2DeltaPresenceEstimationConfig withQuasiIds(GooglePrivacyDlpV2QuasiId[] quasiIds) {
        this.quasiIds = quasiIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public GooglePrivacyDlpV2DeltaPresenceEstimationConfig withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
}