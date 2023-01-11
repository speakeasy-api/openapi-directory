package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2KAnonymityEquivalenceClass
 * The set of columns' values that share the same ldiversity value
**/
public class GooglePrivacyDlpV2KAnonymityEquivalenceClass {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equivalenceClassSize")
    public String equivalenceClassSize;
    public GooglePrivacyDlpV2KAnonymityEquivalenceClass withEquivalenceClassSize(String equivalenceClassSize) {
        this.equivalenceClassSize = equivalenceClassSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quasiIdsValues")
    public GooglePrivacyDlpV2Value[] quasiIdsValues;
    public GooglePrivacyDlpV2KAnonymityEquivalenceClass withQuasiIdsValues(GooglePrivacyDlpV2Value[] quasiIdsValues) {
        this.quasiIdsValues = quasiIdsValues;
        return this;
    }
}