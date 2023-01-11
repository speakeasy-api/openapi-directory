package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2LDiversityEquivalenceClass
 * The set of columns' values that share the same ldiversity value.
**/
public class GooglePrivacyDlpV2LDiversityEquivalenceClass {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equivalenceClassSize")
    public String equivalenceClassSize;
    public GooglePrivacyDlpV2LDiversityEquivalenceClass withEquivalenceClassSize(String equivalenceClassSize) {
        this.equivalenceClassSize = equivalenceClassSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numDistinctSensitiveValues")
    public String numDistinctSensitiveValues;
    public GooglePrivacyDlpV2LDiversityEquivalenceClass withNumDistinctSensitiveValues(String numDistinctSensitiveValues) {
        this.numDistinctSensitiveValues = numDistinctSensitiveValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quasiIdsValues")
    public GooglePrivacyDlpV2Value[] quasiIdsValues;
    public GooglePrivacyDlpV2LDiversityEquivalenceClass withQuasiIdsValues(GooglePrivacyDlpV2Value[] quasiIdsValues) {
        this.quasiIdsValues = quasiIdsValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topSensitiveValues")
    public GooglePrivacyDlpV2ValueFrequency[] topSensitiveValues;
    public GooglePrivacyDlpV2LDiversityEquivalenceClass withTopSensitiveValues(GooglePrivacyDlpV2ValueFrequency[] topSensitiveValues) {
        this.topSensitiveValues = topSensitiveValues;
        return this;
    }
}